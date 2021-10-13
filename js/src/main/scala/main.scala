package portfolio

import scalajs.js
import org.scalajs.dom.{document, window, console, Element, Node, NodeList}
import org.scalajs.dom.raw.SVGElement

extension [T <: Element](e: T)
  def attr(key: String, value: Any) =
    e.setAttributeNS(null, key, value.toString())
    e

  def attr(attrs: (String, Any)*) =
    for (k, v) <- attrs do e.setAttributeNS(null, k, v.toString())
    e

extension [T <: SVGElement](e: T)
  def child(tagName: String): SVGElement =
    val result = document.createElementNS(SVG_URI, tagName)
    e.appendChild(result)
    result.asInstanceOf[SVGElement]

extension (nodes: NodeList)
  def map[T](f: Element => T): Seq[T] =
    var i = 0;
    var buf = collection.mutable.Buffer[T]()
    while (i < nodes.length) {
      buf.append(f(nodes(i).asInstanceOf[Element]))
      i += 1
    }
    buf.toSeq

val SVG_URI = "http://www.w3.org/2000/svg"

object Main extends App:
  document.addEventListener(
    "DOMContentLoaded",
    _ =>
      val r = 24

      val floater = document.querySelector(".floater").asInstanceOf[SVGElement]
      val path = floater.child("path")
      val outline = floater.child("path")
      val projects = document.querySelector(".navbar #projects")
      val resume = document.querySelector(".navbar #resume")
      val playgound = document.querySelector(".navbar #playground")
      val targets = Seq(projects, resume, playgound)
      val widths = targets.map(_.getBoundingClientRect().width.toInt + (r * 2))

      val y = 96 + 24 + 3
      val h = 80
      val w = widths(0)

      val initialLeft = targets(0).getBoundingClientRect().left.toInt - r
      path.attr(
        "d" -> generateTabPath(initialLeft, y, w, h, r),
        "fill" -> "#f6f7ef"
      )

      outline.attr(
        "d" -> generateTabOutline(initialLeft, y, w, h, r),
        "fill" -> "#54ca72",
        "stroke" -> "black",
        "stroke-width" -> "0px"
      )

      def printRect(elt: Element) =
        val r = elt.getBoundingClientRect()
        println(s"top = ${r.top}, r = ${r.right}, b = ${r.bottom}, l = ${r.left} ")
        r

      var currentIndex = 0

      targets.zipWithIndex.map((target, i) =>
        target.addEventListener(
          "click",
          _ =>
            if (i != currentIndex) then
              val r1 = targets(currentIndex).getBoundingClientRect()
              val r2 = targets(i).getBoundingClientRect()
              val startWidth = widths(currentIndex)
              val endWidth = widths(i)
              val startX = r1.left.toInt - r
              val endX = r2.left.toInt - r

              currentIndex = i
              animatePoint(250, startX, startWidth, endX, endWidth)((x, w) =>
                path.attr("d", generateTabPath(x, y, w, h, r))
                outline.attr("d", generateTabOutline(x, y, w, h, r))
              )
        )
      )
  )

  def generateTabOutline(x: Int, y: Int, w: Int, h: Int, r: Int) =
    val b = y - h
    val r2 = 2 * r
    val s = 4

    s"M $x $y " +
      s"Q ${x + r},$y ${x + r},${y - r} " +
      s"L ${x + r},${b + r} " +
      s"Q ${x + r},$b ${x + r2},$b " +
      s"Q ${x + r + s},$b ${x + r + s},${b + r}" +
      s"L ${x + r + s},${y - r}" +
      s"Q ${x + r + s},$y $x,$y"

  def generateTabPath(x: Int, y: Int, w: Int, h: Int, r: Int) =
    val b = y - h
    val r2 = 2 * r
    val wr2 = x + w - r2
    val wr = x + w - r
    val offset = 1
    s"M $x $y " +
      s"Q ${x + r},$y ${x + r},${y - r} " +
      s"L ${x + r},${b + r} " +
      s"Q ${x + r},$b ${x + r2},$b " +
      s"L $wr2,$b " +
      s"Q $wr,$b $wr,${b + r} " +
      s"L $wr,${y - r} " +
      s"Q $wr,$y ${x + w},$y" +
      s"L ${x + w}, ${y + offset}" +
      s"L $x ${y + offset} z"

  def animatePoint(ms: Int, startX: Int, startY: Int, targetX: Int, targetY: Int)(
      callback: (Int, Int) => Any
  ) =
    def easing(t: Double): Double =
      1.0 - math.pow(2, -10 * t)

    var animator: js.Function1[Double, Any] = null;
    var startTime: Double = 0.0;
    animator = (_: Double) =>
      val elapsed = window.performance.now()
      if ((elapsed - startTime) < ms)
        val linearT = (elapsed - startTime) / (ms.toDouble)
        val t = easing(linearT)
        val tX = startX + t * (targetX - startX)
        val tY = startY + t * (targetY - startY)
        callback(tX.toInt, tY.toInt)
        window.requestAnimationFrame(animator)
      else callback(targetX, targetY)
    startTime = window.performance.now()
    window.requestAnimationFrame(animator)
