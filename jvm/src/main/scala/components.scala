package portfolio

import Tags.*

trait Component extends Element:
  val value: Element
  def render() = value.render()

def LinkIcon(key: String) =
  a("href" -> LinkContext(key), "target" -> "_blank")(
    img("src" -> s"icons/$key.svg")
  )

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

def post(title: String, subtitle: String)(children: Element*) =
  div("project-wrapper")("onclick" -> "expand(event)")(
    div("project-title") / title,
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
