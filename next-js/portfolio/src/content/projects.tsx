import Image from "next/image";
import { Project, L, P } from "@/components/Project";

export const projects = (
  <>
    <Project
      title="CAD Referencing (2023)"
      description="Referring to 3D Elements in Parametric Models."
      linkText="PLDI Paper"
      linkTarget="https://dcascaval.github.io/lineage-based-cad-referencing-pldi23.pdf"
      image={
        <Image
          src="/lineage-teaser.png"
          className="dark:grayscale dark:invert"
          alt="Lineage based referencing teaser image"
          width={1000}
          height={500}
        />
      }
    >
      <P>
        Referring to elements in a parametric CAD model is a fundamental
        operation required for many. Existing parametric tools allow users to
        click an element (point, edge, or shape), and when model parameters
        change, use heuristics to determine which element that refers to. While
        this can work, it is error-prone and breaks in surprising and subtle
        ways, making it difficult to define a design space to explore.
      </P>
      <P>
        This project introduces a referencing system for identifying elements
        based on the concept of lineage, a constructed graph of the
        {"model's"} computational history. The lineage graph can be queried to
        identify elements in a way that is robust to both parameter and program
        edits. This makes the fundamental selection primitive user-defined,
        robust, and introspectable; bringing us a step closer to being able to
        realize the dream of interleaving manual and parametric modeling.
      </P>
      <P>
        This system is implemented in Scala, using{" "}
        <L href="https://www.scala-js.org/">Scala.js</L> to compile it to the
        web. Check out a{" "}
        <L href="https://dcascaval.github.io/lineage/">live demo</L> of the
        language creating parametric models in the browser as well as{" "}
        <L href="https://github.com/dcascaval/lineage-based-cad-referencing/blob/main/language-docs.md">
          documentation
        </L>{" "}
        of the language and API.
      </P>
    </Project>
  </>
);
