package portfolio

import Tags.*

object Intro extends Component:
  val value = <>(
    content /
      "I'm a PhD student in Computer Science at the [University of Washington] advised by [Ras Bodik] and [Adriana Schulz].",
    content /
      "I am working on problems in computational geometry and shape manipulation using program synthesis and related tools. Right now, that includes representing 3D CAD models as programs and developing synthesis-based tools for *bidirectional editing*, *constraint exploration*, and *design optimization*. I am always looking for new applications for this work, particularly in the domain of improving architecture, design, and the built environment.",
    content /
      "My past work focuses on applications of parallel computing and constraint-based geometric modeling tools, as well as research in combining computation and fabrication to make more responsive environments. I completed my undergraduate degree as a dual major in both *Architecture* and *Computer Science*, and I'm still working to intersect them -- if you're interested in combining these fields, please do reach out!"
  )

object Impala extends Component:
  val value = post(
    title = "Impala",
    subtitle = " Parallel, high performance component library for Grasshopper3D."
  )(
    img("src" -> "images/icon_banner_3.png"),
    spaced(
      t / "[Grasshopper3D] is a visual programming language for creating parametric models embedded in the CAD platform [Rhino3D]. It works as a directed graph of components, each performing an operation, that send trees of data along edges to trigger recomputation.",
      t / "[Impala] dramatically improves the performance of Grasshopper on models that handle large amounts of data. At its core, it provides a reimplementation of standard components to run in parallel as a drop-in replacement to the Grasshopper standard library. Impala is excellent for processing *point clouds*, *landscape data*, and *physical simulations*.",
      t / "Impala combines this strategy with a few key insights to maximize the available performance benefit:"
    ),
    ul(
      li /
        "*Minimize allocation overhead.* Impala re-implements the basic data tree structure. This allows space to be preallocated, trees to be filled in parallel, and a compact encoding of tree paths.",
      li /
        "*Restrict type-casts.* Impala assumes a homogenous type of data in a tree, as is nearly always the case in practice. This allows type conversions to happen much more quickly for large data trees.",
      li /
        "*Algorithmic optimization.* Impala replaces some quadratic implementations in the standard library with custom strategies that have improved parallel complexity."
    ),
    t / "Drop-in replacement of existing components with Impala variants yielded *speedups of 10-20x* relative to the base Grasshopper implementation on a mix of standard and randomly-generated workloads. More speedup is achieved in adversarial cases, or where several Impala components can be chained together. Additionally, using Impala can significantly reduce the memory overhead of a Grasshopper script, resulting in smoother overall interactivity."
  )

object DAG extends Component:
  val report = Link("418-report") / "full report"
  val cuda = Link("CUDA") / "CUDA kernel launches"
  val dag = <>(br, Image("dag") / "Compiler Structure.", br)

  val value = post(
    title = "DAG",
    subtitle = "Data-parallel programming language compiled for GPU."
  )(
    img("src" -> "images/julia_render.png"),
    vspace,
    spaced(
      t / s"As part of CMU's [15-418], Parallel Computer Architecture and Programming, [Nick Roberts] and I designed an implemented a programming language to easily prototype different strategies for parallelisation on the GPU.",
      t / "Our basic concept is to represent each program point as an expression node in directed acyclic graph. This directly expresses which nodes contain dependencies. We derive a traversal of this DAG representing a particular parallel execution, and optimize our choices based on statically gathered heuristics such as minimizing memory transfer.",
      t / s"We directly model regular parallelism inherent in the program as a set of first-class primitive parallel-expressions, which include `for`, `zip_with`, `filter_with`,`reduce`, `scan`, `range`, and `transpose`. For a detailed description of the semantics of these primitives, the interested reader can refer to the $report.",
      t / s"Together these allow the user to precisely convey their intent for what should be parallelized. Our compiler then analyzes nested and consecutive parallel-fors and lowers them to $cuda, performing loop fusion and merging nested parallelism in attempting to minimize the number of launches needed. $dag We demonstrate the efficacy of our system through concise and performant programs performing large matrix multiplications, fractal renderings (seen above), and previous 15-418 course assignments -- all problems that are embarassingly parallel, but somewhat painful to implement. We theorize that this approach would work reasonably well with other parallel GPU backends."
    )
  )

object NBBJ extends Component:
  val talk = Link("AU18") / "industry talk"

  val value = post(
    title = "Modeling Tools",
    subtitle = "Constraint-Based Modeling: Panel Designer & Façade Painter"
  )(
    spaced(
      t / "Under the supervision of [Nate Holland]",
      Image(
        "facade-painter"
      ) / "Rendered view of full-resolution geometry generated by the Facade Painter",
      t / "In design computation team at [NBBJ], we worked on solutions to aid the design and modeling process of building facades, which are often complex and unwieldy to manipulate and iterate on in existing building information modeling pipelines. Our solution allowed users to model a module or a set of pattern modules responsively with constraints in Rhino3D and pattern them adaptively and parameterically using Grasshopper3D. After the initial design is set, further work exports the geometry and parameters to a higher-detail format for processing in Autodesk Revit.",
      Image("facade-toolkit") / "Prototype user interface",
      t / "In this work, the designer is able to quickly insert and remove constraints, and constraints are responsive and flexible to user editing. Our custom implementation allows users to model flexibly and quickly, and immediately see the impact of their changes at a building level in an interactive tool.",
      Image("panel-designer") / "Workflow overview for single Panel Designer workspace",
      t / s"In practice, this tool was able to save tens of hours on each project in the early design phase for teams iterating quickly on facade curtain wall design compared to modeling traditionally or within Revit directly. This work was presented and demonstrated in an $talk at Autodesk University 2018."
    )
  )

object SentientConcrete extends Component:
  val value = post(
    title = "Sentient Concrete",
    subtitle = "Environmentally-responsive surface geometry."
  )(
    t / "Under the supervision of [Dana Cupkova] and [Daragh Byrne].",
    Image("sentient-regions") /
      "Individual heating control regions and their connectivity within a large panel",
    br,
    spaced(
      t / "This design work focuses on remixing thermochromic elements as an environmental design element, and sits within a larger body of work on using computational design to create interactive architectural elements. We prototype architectural concrete panels that are responsive to human presence, activating in the presence of observers by changing color through an embedded electric system.",
      Image("sentient-fabrication") / "Fabricated prototypes and wiring.",
      t / "The project makes extensive use of physical simulation to understand the interaction of temperature with the surface material and geometry, in order to accurately predict and iterate on the design of dynamic thermal effects -- both surface geometry and wiring density have a profound effect on heat dissipation, and, correspondingly, the length of the time that the panel changes color.",
      Image("sentient-thermals") /
        "Thermal gradient. Large scale simulation (left), small-scale infrared camera (right).",
      t / "We fabricated several prototypes using concrete with an outer plaster layer, embedding our wiring at a precise and consistent depth. For larger panels, we use multiple wiring regions for fine-tuned control over thermally actuating changes."
    ),
    vspace,
    p("citation") /
      "Cupkova, D. and Byrne, D., Cascaval, D. 2018. SENTIENT CONCRETE: Developing Embedded Thermal and Thermochromic Interactions for Architecture and Built Environment. In Proceedings of the 23rd International Conference of the Association for Computer-Aided Architectural Design Research in Asia (CAADRIA) 2018, Hong Kong.",
    br,
    Link("CAADRIA18") / "PDF"
  )
