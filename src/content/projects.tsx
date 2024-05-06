import Image from "next/image";
import { Project, L, P } from "@/components/Project";

type RegularImageProps = {
  href: string;
  priority?: boolean;
};

const Regular = ({ href, priority }: RegularImageProps) => (
  <Image
    src={href}
    className="dark:hue-rotate-180 dark:invert"
    alt="Project overview image"
    width={1000}
    height={500}
    priority={priority}
  />
);

type CaptionProps = RegularImageProps & { caption: string };

const WithCaption = (props: CaptionProps) => (
  <>
    <Regular {...props} />
    <figcaption className="mb-4 text-center text-sm">
      {props.caption}
    </figcaption>
  </>
);

const Blender = <L href="https://www.blender.org/">Blender</L>;
const LineageDemo = (
  <L href="https://dcascaval.github.io/lineage/">live demo</L>
);
const LineageDocs = (
  <L href="https://github.com/dcascaval/lineage-based-cad-referencing/blob/main/language-docs.md">
    documentation
  </L>
);
const ScalaJS = <L href="https://www.scala-js.org/">Scala.js</L>;
const Grasshopper = <L href="https://www.grasshopper3d.com/">Grasshopper3D</L>;
const Rhino = <L href="https://www.rhino3d.com/">Rhino3D</L>;
const Impala = <L href="https://www.food4rhino.com/app/impala">Impala</L>;
const NBBJ = <L href="https://www.nbbj.com/">NBBJ</L>;
const AU18 = (
  <L href="https://www.autodesk.com/autodesk-university/class/Cross-Platform-Unitized-Curtain-Wall-2018">
    industry talk
  </L>
);
const Nate = (
  <L href="https://www.linkedin.com/in/nate-holland-683ab76a/">Nate Holland</L>
);

export const projects = (
  <>
    <Project
      title="CAD Referencing (2022)"
      description="Referring to 3D Elements in Parametric Models."
      linkText="PLDI Paper"
      linkTarget="https://dcascaval.github.io/lineage-based-cad-referencing-pldi23.pdf"
      image={<Regular href="/lineage-teaser.png" priority={true} />}
    >
      <P>
        Referring to elements in a parametric CAD model is a fundamental
        primitive that allows designs to be expressed concisely. Existing
        parametric tools allow users to click an element (point, edge, or
        shape), and when model parameters change, use heuristics to determine
        which element that refers to. While this can work, it is error-prone and
        breaks in surprising and subtle ways, making it difficult to define a
        design space to explore.
      </P>
      <P>
        This project introduces a referencing system for identifying elements
        based on the concept of <strong>lineage</strong>, a constructed graph of
        the
        {"model's"} computational history. The lineage graph can be queried to
        identify elements in a way that is robust to both parameter and program
        edits. This makes the fundamental selection primitive user-defined,
        robust, and introspectable; bringing us a step closer to being able to
        realize the dream of interleaving manual and parametric modeling.
      </P>
      <P>
        This system is implemented in Scala, using {ScalaJS} to compile it to
        the web. Check out a {LineageDemo} of the language creating parametric
        models in the browser as well as {LineageDocs} of the language and API.
      </P>
    </Project>
    <Project
      title="Bidirectional Editing (2021)"
      description="Differentiable 3D CAD Programs for Geometry Manipulation."
      linkTarget="https://arxiv.org/pdf/2110.01182.pdf"
      linkText="EUROGRAPHICS Paper"
      image={<Regular href="/bench-teaser.png" />}
    >
      <P>
        Manipulating parametric CAD programs purely by their parameters can be
        an arduous ordeal. On models with many parameters, it is difficult to
        tell what effect a parameter change will have on the geometric output,
        and to express design intent in terms of a {"model's"} parameters.
      </P>
      <P>
        This project offers a <strong>bidirectional interface</strong>, where
        users can drag vertices on the geometry, and the {"model's"} parameters
        will update such that the vertex appears in the specified location. As a
        result, users can interchangably interact with both the generated
        geometry and underlying program, using whichever representation is more
        convenient for a given edit.
      </P>
      <P>
        Under the hood, the project performs a series of optimizations according
        to different heuristics -- after all, while it is clear where the target
        vertices should go, there might be many ways to get there, or none. In
        these cases we aim to get as close as possible, offering a range of
        possible model alternatives for the user to select between in a rapid
        iteration loop. We are able to solve the optimizations quickly and at
        scale by providing a <strong>domain-specific language</strong> for CAD
        that is limited to operations that can be automatically differentiated.
        This takes the form of a plugin for {Blender} that exposes a scripting
        interface inline.
      </P>
    </Project>
    <Project
      title="Impala (2018)"
      description="Parallel, high performance component library for Grasshopper3D."
      linkTarget="https://github.com/dcascaval/Impala"
      linkText="Code"
      image={<Regular href="/icon_banner_3.png" />}
    >
      <P>
        {Grasshopper} is a visual programming language for creating parametric
        models embedded in the CAD platform {Rhino}. It works as a directed
        graph of components, each performing an operation, that send trees of
        data along edges to trigger recomputation.
      </P>
      <P>
        {Impala} dramatically improves the performance of Grasshopper on models
        that handle large amounts of data. At its core, it provides a
        reimplementation of standard components to run in parallel as a drop-in
        replacement to the Grasshopper standard library. Impala is excellent for
        processing <strong>point clouds</strong>,{" "}
        <strong>landscape data</strong>, and{" "}
        <strong>physical simulations</strong>.
      </P>
      <P>
        Impala combines this strategy with a few key insights to maximize
        performance:
        <ul className="list-disc">
          <li className="ml-4 mt-2">
            <strong>Minimize allocation overhead.</strong> Impala re-implements
            the basic data tree structure. This allows space to be preallocated,
            trees to be filled in parallel, and a compact encoding of tree
            paths.
          </li>
          <li className="ml-4 mt-2">
            <strong>Restrict type-casts.</strong> Impala assumes a homogenous
            type of data in a tree, as is nearly always the case in practice.
            This prevents copies and allows type conversions to happen much more
            quickly for large data trees.
          </li>
          <li className="ml-4 mt-2">
            <strong>Algorithmic optimization.</strong> Impala replaces some
            quadratic implementations in the standard library with custom
            strategies that have improved parallel complexity.
          </li>
        </ul>
      </P>
      <P>
        Drop-in replacement of existing components with Impala variants yielded{" "}
        <strong>speedups of 10-20x</strong> relative to the base Grasshopper
        implementation, on a mix of standard and randomly-generated workloads.
        Greater speedups are seen in adversarial cases, or where several Impala
        components can be chained together. Additionally, using Impala can
        significantly reduce the memory overhead of a Grasshopper script,
        resulting in smoother overall interactions.
      </P>
    </Project>
    <Project
      title="Modeling Tools"
      description="Constraint-Based Modeling: Panel Designer & Façade Painter."
    >
      <P>Under the supervision of {Nate}.</P>
      <WithCaption
        href="/facade-painter-iso-hires.png"
        caption="Rendered view of full-resolution geometry generated by the Facade Painter"
      />
      <P>
        In the design computation team at {NBBJ}, we worked on solutions to aid
        the design and modeling process of building facades, which are often
        complex and unwieldy to manipulate and iterate on in existing building
        information modeling pipelines. Our solution allowed users to model a
        module or a set of pattern modules responsively with constraints in
        Rhino3D and pattern them adaptively and parameterically using
        Grasshopper3D. After the initial design is set, further work exports the
        geometry and parameters to a higher-detail format for processing in
        Autodesk Revit.
      </P>
      <WithCaption
        href="/facade-toolkit-3.png"
        caption="Prototype user interface"
      />
      <P>
        In this work, the designer is able to quickly insert and remove
        constraints, and constraints are responsive and flexible to user
        editing. Our custom implementation allows users to model flexibly and
        quickly, and immediately see the impact of their changes at a building
        level in an interactive tool.
      </P>
      <WithCaption
        href="/panel-designer-ui-hires.png"
        caption="Workflow overview for single Panel Designer workspace"
      />
      <P>
        In practice, this tool was able to save tens of hours on each project in
        the early design phase for teams iterating quickly on facade curtain
        wall design compared to modeling traditionally or within Revit directly.
        This work was presented and demonstrated in an {AU18} at Autodesk
        University 2018.
      </P>
    </Project>
  </>
);
