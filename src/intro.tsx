import React from "react";
import { Link, Content } from "./elements";

export default () => (
  <>
    <Content>
      I'm a PhD student in Computer Science at the <Link>University of Washington</Link> advised by <Link>Ras Bodik</Link> and <Link>Adriana Schulz</Link>.
    </Content>
    <Content>
      I am working on problems in computational geometry and shape manipulation using program synthesis and related tools.Right now, that includes representing 3D CAD models as programs and developing synthesis-based tools for <em>bidirectional editing</em>,<em>constraint exploration</em>, and <em>design optimization</em>.I am always looking for new applications for this work, particularly in the domain of improving architecture, design, and the built environment.
    </Content>
    <Content>
      My past work focuses on applications of parallel computin g and constraint-based geometric modeling tools, as well as research in combining computation and fabrication to mak e more responsive environments.I completed my undergraduate degree as a dual major in both <em>Architecture</em> and <em>Computer Science</em>, and I'm still working to intersect them&mdash; if you're interested in combining these fields, please do reach out!
    </Content>
  </>
);
