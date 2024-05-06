import { Project, L, P } from "@/components/Project";

export const resumes = (
  <>
    <Project title="Branch" description="Software Developer (2023 - present)">
      <P>
        <L href="https://www.branch3d.com/">Branch</L> is an AEC software
        startup embedded within{" "}
        <L href="https://structurecraft.com/">StructureCraft</L>, focusing on
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
        that powers {"Branch's"} modeling capabilities. Branch is{" "}
        <L href="https://structurecraft.com/hiring/#branch">hiring</L>, so if
        this sounds like interesting work to you, we should chat.
      </P>
    </Project>
  </>
);
