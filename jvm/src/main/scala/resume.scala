package portfolio

import Tags.*

object Join extends Component:
  val value = post(
    title = "Join",
    subtitle = "Software Engineer, 2019-2020"
  )(
    t / "*[Join]* is a San Francisco-based software startup providing intelligent collaboration tools for the construction industry. Construction is an *incredibly complex industry* with many moving parts, and construction professionals are known for their dedication to the field and for the high demands they place on their tools of choice.",
    br,
    t / "While at Join, I worked as part of a small, fast-moving product team shipping production-quality code with an eye for making a positive impact in the lives of our users. I had the chance to work on every part of the stack --",
    ul(
      li /
        "*Optimizing* Postgres queries to improve whole-application performance",
      li /
        "*Extending and tuning* our Golang backend to support new product features",
      li /
        "*Rebuilding and automating* our testing infrastructure to support tests that are faster, easier to write, and more reliable",
      li /
        "*Designing and iterating* on highly-interactive user-facing web components for cost manipulation and tracking"
    ),
    t / "all with the goal to bring users an efficient, customizable and clear way to manage their projects and tame the complexity of construction."
  )

object DesignComputation extends Component:
  val value = post(
    title = "NBBJ",
    subtitle = "Design Computation Intern, Summer 2018"
  )(
    t / "*[NBBJ]* is a world-class architecture firm based in Seattle, innovating in sustainability and design technology. I interned on the *Design Computation* team, tasked with understanding architectural design workflows and finding ways to make design software more efficient, scalable, and user-friendly.",
    br,
    t / "As part of the team, I worked on",
    ul(
      li /
        "*Automating* facade-modeling tools to handle patterns and allow designers to quickly iterate and optimize complex forms.",
      li /
        "*Researching* how plugins to surface-modeling tools like Rhino can allow for a hybrid of direct and constraint-based modeling strategies.",
      li /
        "*Developing* tools and strategies to aid interoperability between software used both within the firm and externally."
    ),
    t / "I learned a lot about the dark arts of CAD in practice, and witnessed the immense complexity of building-projects first hand, as well as a finer appreciation for the *impact that good design can have* on all of our lives."
  )

object TeachingAssistant extends Component:
  val robarch = Link("robarch-paper") / "Robotic manufacturing"
  val caadria = Link("CAADRIA18") / "Thermally coloring"

  val value = post(
    title = "Carnegie Mellon",
    subtitle = "Teaching & Research Assistant, 2016-2019"
  )(
    t / "At Carnegie Mellon I did research under *[Dana Cupkova]*, *[Josh Bard]*, and *[Daragh Byrne]*. I brought a unique knowledge of computation to the table and wrote some software that is still used in the labs today. This included work in:",
    ul(
      li /
        s"*$robarch* of architectural-scale concrete panels to allow a wider variety of forms and faster production without using molds",
      li /
        "*Design optimization* for concrete panels to have precise thermal properties derived from their surface geometry",
      li /
        s"*$caadria* panels using embedded, proximity-controlled wiring to create a spidery, concrete mood-ring..."
    ),
    br,
    t / "Throughout my undergraduate experience I also was lucky to discover and nurture a love of teaching. I served as a teaching assistant for classes whenever I could, including:",
    ul(
      li /
        "*Compiler Design (Fall 2019)*, a graduate/undergraduate compilers course focusing on modern compiler optimizations with Prof. [Seth Goldstein]",
      li /
        "*Principles of Software Construction (Fall 2018)*, an undergraduate object-oriented software design and analysis course with Profs. [Charlie Garrod] and [Josh Bloch].",
      li /
        "*Computational Techniques for the Built Environment (Spring 2018)*, a design-based seminar bringing interdisciplinary students together to do computationally-focused design research under Prof. Dana Cupkova",
      li /
        "*Introduction to Digital Media (Fall 2016 to Spring 2018)* throughout its many forms, introducing architecture students to 3D-modeling, rendering, animation, and parametric design, under Prof. [Eddy Man Kim]."
    )
  )
