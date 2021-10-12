package portfolio

import collection.immutable.Map
import scala.reflect.ClassTag

trait Element:
  def render(): String
  override def toString() = render()

given [T]: Conversion[T, Option[T]] = t => Some(t)
given Conversion[Element, String] = e => e.render()
extension (text: String) def +(element: Element) = text + element.render()

object Tags:
  extension (attributes: Map[String, Any])
    def updateAttribute(key: String, value: Option[String]) =
      value
        .map(valueString =>
          val newAttr = attributes.get(key).getOrElse("").toString + valueString
          attributes + (key -> newAttr)
        )
        .getOrElse(attributes)

  case class Tag(tagName: String, attributes: Map[String, Any] = Map(), children: Seq[Element] = Seq())
      extends Element:
    val renderShortened = false
    def render() =
      var attrs = attributes.toSeq
        .map((k, v) => if (v != LoneAttribute) s"$k=\"$v\"" else k)
        .mkString(" ")
      var space = if attrs.length > 0 then " " else ""
      if (renderShortened) then s"<$tagName$space$attrs/>"
      else s"<$tagName$space$attrs>${children.map(_.render()).mkString("")}</$tagName>"

    def apply(newAttributes: (String, Any)*) =
      Tag(tagName, attributes ++ newAttributes, children)
    def apply(newChildren: => Element*) = Tag(tagName, attributes, children ++ newChildren)
    def apply(cls: Option[String] = None, id: Option[String] = None): Tag =
      Tag(tagName, attributes.updateAttribute("class", cls).updateAttribute("id", id), children)
    def /(textContent: String) =
      Tag(tagName, attributes, children = Seq(TextContent(textContent)))

  class ShortTag(tagName: String) extends Tag(tagName):
    override val renderShortened = true

  case class TextContent(rawContent: String) extends Element:
    val content = sanitize(rawContent)
    def render() = content

  case class Fragment(children: Seq[Element]) extends Element:
    def render() =
      children.map(_.render()).mkString("")

  def head = Tag("head")
  def meta = Tag("meta")
  def nav = Tag("nav")
  def link = Tag("link")
  def title = Tag("title")
  def script = Tag("script")
  def body = Tag("body")
  def section = Tag("section")
  def div = Tag("div")
  def ul = Tag("ul")
  def li = Tag("li")
  def img = Tag("img")
  def p = Tag("p")
  def a = Tag("a")
  def figcaption = Tag("figcaption")
  def em = Tag("em")
  def hr = ShortTag("hr")
  def br = ShortTag("br")

  def svg = Tag("svg")
  def path = Tag("path")

  def <>(children: Element*) = Fragment(children)

extension (text: String)
  def replaceSections(separator: String, f: String => String): String =
    text
      .split(separator)
      .toSeq
      .zipWithIndex
      .map((sec, i) => if (i % 2 == 0) then sec else f(sec))
      .mkString("")

// This ends up implementing a mini-markup language.
def sanitize(htmlString: String) =
  htmlString
    .replaceSections("\\*", t => s"<em>$t</em>")
    .replaceSections("\\[|\\]", t => Link(t).render())
    .replaceSections("\\`", t => s"<code>$t</code>")
    .replace("--", "&mdash;")

case object LoneAttribute

object attr:
  def /(attribute: String) = (attribute, LoneAttribute)
