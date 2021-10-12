package portfolio

import Tags.*

object HTMLPage:
  def render(header: Element, body: Element) =
    s"<html>${header.render()}${body.render()}</html>"

object Homepage:
  val header =
    head(
      meta("charset" -> "utf-8"),
      meta("name" -> "viewport", "content" -> "width=device-width, initial-scale=1.2, shrink-to-fit=no"),
      meta("name" -> "description", "content" -> "Programming Languages and CAD"),
      meta(
        "name" -> "keywords",
        "content" -> "Architecture, Design, Computation, Environment, Research"
      ),
      meta("name" -> "author", "content" -> "Dan Cascaval"),
      link("rel" -> "preconnect", "href" -> "https://fonts.googleapis.com"),
      link("rel" -> "preconnect", "href" -> "https://fonts.gstatic.com", attr / "crossorigin"),
      link(
        "href" -> "https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&amp;family=Roboto+Slab:wght@400;700&amp;display=swap",
        "rel" -> "stylesheet"
      ),
      link("rel" -> "stylesheet", "href" -> "minireset.css"),
      link("rel" -> "stylesheet", "href" -> "dist/styles.css"),
      title / "Dan Cascaval",
      script("src" -> "dist/actions.js"),
      script("src" -> "dist/live.js")
    )

  def navtab(name: String) =
    li("onclick" -> s"switchTo('${name.toLowerCase().trim()}')") / name

  val navbar =
    nav("navbar")(
      ul(
        navtab("Projects")(cls = "active"),
        navtab("Resume")
      )
    )

  val sidebar =
    div("sidebar")(
      div("headshot")(
        img("src" -> "images/dan.jpg")
      ),
      div("bio")(
        p("name") / "Dan Cascaval",
        p("email") / "cascaval@cs.washington.edu"
      ),
      p("links")(
        LinkIcon("Github"),
        LinkIcon("LinkedIn"),
        LinkIcon("Instagram"),
        LinkIcon("Mail")
      )
    )

  val content =
    body("preload")(
      div("root")(
        sidebar,
        div("content-wrapper")(
          navbar,
          div("main-content")(
            section(id = "projects", cls = "show")(
              Intro,
              Impala,
              DAG,
              NBBJ,
              SentientConcrete
            ),
            section(id = "resume", cls = "fade")(
              Join,
              DesignComputation,
              TeachingAssistant
            )
          )
        )
      )
    )

  def render() = HTMLPage.render(header, content)

object Main extends App:
  import java.io.{File, PrintWriter}

  def writeToFile(file: String)(strings: String*) =
    val p = new PrintWriter(new File(file))
    try { for (string <- strings) p.println(string) }
    finally { p.close() }

  writeToFile("../index.html")(
    Homepage.render()
  )
  println(br.render())
