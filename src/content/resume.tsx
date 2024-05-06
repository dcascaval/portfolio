import { Project, L, P } from "@/components/Project";

const Branch = <L href="https://www.branch3d.com/">Branch</L>;
const BranchHiring = (
  <L href="https://structurecraft.com/hiring/#branch">hiring</L>
);
const NBBJ = <L href="https://www.nbbj.com/">NBBJ</L>;
const SC = <L href="https://structurecraft.com/">StructureCraft</L>;
const Join = <L href="https://www.join.build/">Join</L>;

const Dana = <L href="https://danacupkova.com/">Dana Cupkova</L>;
const JoshBard = <L href="https://www.joshbard.com/">Josh Bard</L>;
const Charlie = <L href="https://www.cs.cmu.edu/~charlie/">Charlie Garrod</L>;
const Seth = <L href="http://www.cs.cmu.edu/~seth/">Seth Goldstein</L>;
const JoshBloch = <L href="https://twitter.com/joshbloch">Josh Bloch</L>;
const Eddy = <L href="http://eddyman.kim/">Eddy Man Kim</L>;
const Daragh = <L href="https://www.daraghbyrne.me/">Daragh Byrne</L>;
const RobArch = (
  <L href="https://link.springer.com/article/10.1007/s41693-018-0014-x">
    Robotic manufacturing
  </L>
);
const Caadria = (
  <L href="http://papers.cumincad.org/data/works/att/caadria2018_333.pdf">
    Thermally coloring
  </L>
);

export const resumes = (
  <>
    <Project title="Branch" description="Software Developer (2023 - present)">
      <P>
        {Branch} is an AEC software startup embedded within {SC}, focusing on
        mass-timber fabrication detailing. Branch models entire building
        structures down to the nuts and bolts, and has been used to detail
        hundreds of thousands of square feet of mass-timber buildings. Every
        building project is different, so Branch focuses on performance and
        scriptability to allow for a wide variety of design and fabrication
        workflows.
      </P>
      <P>
        On the Branch team, I work on the core product, written in C# and
        Typescript. I design and execute technical features, spanning the
        spectrum from graphics and display infrastructure, to new parametric
        modeling primitives, and the design of a flexible relationship system
        that powers {"Branch's"} modeling capabilities. Branch is {BranchHiring}
        , so if this sounds like interesting work to you, we should chat.
      </P>
    </Project>
    <Project title="Join" description="Software Engineer (2019 - 2020)">
      <P>
        {Join} is a San Francisco-based software startup providing web-based
        preconstruction collaboration tools for the construction industry,
        bringing together owners, general contractors, and design teams.
        Construction projects are highly complex and custom, and construction
        professionals are known for their dedication to the field and for the
        high demands they place on their tools of choice.
      </P>
      <P>
        While at Join, I was part of a small, fast-moving product team with a
        strong user focus. Technically, I worked on every part of the stack —
        optimizing Postgres queries, rebuilding and automating testing
        infrastructure, and designing and iterating on highly-interactive
        user-interface components for cost manipulation and tracking. I gained
        an appreciation for the complexity of construction project management
        and the importance of clarity in software in addition to correctness.
      </P>
    </Project>
    <Project title="NBBJ" description="Design Computation Intern (Summer 2018)">
      <P>
        {NBBJ} is a world-class architecture firm based in Seattle, innovating
        in sustainability and design technology. I interned on the Design
        Computation team, tasked with understanding architectural design
        workflows and finding ways to make design software more efficient,
        scalable, and user-friendly.
      </P>
      <P>
        As part of the team, I worked on automating facade-modeling tools to
        handle patterns and allow designers to quickly iterate and optimize
        complex forms. I researched how plugins to surface-modeling tools like
        Rhino can allow for a hybrid of direct and constraint-based modeling
        strategies, and worked on developing tools and strategies to aid
        interoperability between software used both within the firm and
        externally.
      </P>
      <P>
        I learned a lot about the dark arts of CAD in practice, and witnessed
        the immense complexity of building-projects first hand, as well as a
        finer appreciation for the impact that good design can have on all of
        our lives.
      </P>
    </Project>
    <Project
      title="Carnegie Mellon"
      description="Teaching & Research Assistant (2016-2019)"
    >
      <P>
        At Carnegie Mellon I was a research assistant under {Dana}, {JoshBard},
        and
        {Daragh}. This was the first time I was able to blend code and
        architecture outside of class, and I wrote some software that is still
        used in the labs today. This included work in:
        <ul className="list-disc">
          <li className="ml-4 mt-2">
            <strong>{RobArch}</strong> of architectural-scale concrete panels to
            allow a wider variety of forms and faster production without using
            molds
          </li>
          <li className="ml-4 mt-2">
            <strong>Design optimization</strong> for concrete panels to have
            precise thermal properties derived from their surface geometry
          </li>
          <li className="ml-4 mt-2">
            <strong>{Caadria}</strong> panels using embedded,
            proximity-controlled wiring to create a spidery, concrete
            mood-ring...
          </li>
        </ul>
      </P>
      <P>
        Throughout my undergraduate experience I also was lucky to discover and
        nurture a love of teaching. I served as a teaching assistant for classes
        whenever I could, including:
        <ul className="list-disc">
          <li className="ml-4 mt-2">
            <strong>Compiler Design (Fall 2019)</strong>, a
            graduate/undergraduate compilers course focusing on modern compiler
            optimizations with Prof. {Seth}
          </li>
          <li className="ml-4 mt-2">
            <strong>Principles of Software Construction (Fall 2018)</strong>, an
            undergraduate object-oriented software design and analysis course
            with Profs.
            {Charlie} and {JoshBloch}.
          </li>
          <li className="ml-4 mt-2">
            <strong>
              Computational Techniques for the Built Environment (Spring 2018)
            </strong>
            , a design-based seminar bringing interdisciplinary students
            together to do computationally-focused design research under Prof.
            Dana Cupkova
          </li>
          <li className="ml-4 mt-2">
            <strong>
              Introduction to Digital Media (Fall 2016 to Spring 2018)
            </strong>{" "}
            throughout its many forms, introducing architecture students to
            3D-modeling, rendering, animation, and parametric design, under
            Prof. {Eddy}
          </li>
        </ul>
      </P>
    </Project>
  </>
);
