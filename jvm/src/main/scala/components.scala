package portfolio

import Tags.*

trait Component extends Element:
  val value: Element
  def render() = value.render()

def LinkIcon(key: String) =
  a("nohover")("href" -> LinkContext(key), "target" -> "_blank")(
    img("src" -> s"icon/${key.toLowerCase()}.min.svg")
  )

def TitleLink(key: String, text: String) =
  r / s"[${Link(key) / text}]"

def Link(key: String) =
  a("href" -> LinkContext(key), "target" -> "_blank") / key

class Image(key: String):
  def /(caption: String) =
    <>(
      img("src" -> s"images/${ImageContext(key)}"),
      figcaption / caption
    )

def content = Tag("div", Map("class" -> "content"))

object t:
  def /(content: String) = TextContent(content)

object r:
  def /(content: String) = TextContent(content, raw = true)

def post(title: String, subtitle: String, link: Option[Element] = None, year: Option[String] = None)(
    children: Element*
) =
  val yearString: String =
    year.map(y => s" <div>(<p>$y</p>)</div>").getOrElse("")
  val linkElement = link.map(e => div("project-link")(r / (" " + e))).getOrElse(<>())

  section(id = title.toLowerCase().replace(" ", ""), cls = "project-wrapper")(
    "onclick" -> "expand(event)"
  )(
    (div("project-title") / (title + yearString))(
      linkElement
    ),
    div("project-content expand")(
      div("subtitle")(
        p / subtitle,
        div("arrow expand")
      ),
      div("project-details expand")("onclick" -> "swallow(event)")(
        hr,
        <>(children*)
      )
    )
  )

def vspace = <>(br, br)

def spaced(elts: Element*) =
  <>(elts.flatMap(e => Seq(e, vspace)).dropRight(1)*)
