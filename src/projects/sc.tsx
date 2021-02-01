import React from "react";
import { Link, Post, Break, Image } from "../elements";

export default () => (
  <Post title="Sentient Concrete" subtitle="Environmentally-responsive surface geometry.">
    Under the supervision of <Link>Dana Cupkova</Link> and <Link>Daragh Byrne</Link>.<Image name="sentient-regions">Individual heating control regions and their connectivity within a large panel.</Image>
    <br />
    This design work focuses on remixing thermochromic elements as an environmental design element, and sits within a larger body of work on using computational design to create interactive architectural elements. We prototype architectural concrete panels that are responsive to human presence, activating in the presence of observers by changing color through an embedded electric system.
    <Break />
    <Image name="sentient-fabrication">Fabricated prototypes and wiring.</Image>
    <br />
    The project makes extensive use of physical simulation to understand the interaction of temperature with the surface material and geometry, in order to accurately predict and iterate on the design of dynamic thermal effects -- both surface geometry and wiring density have a profound effect on heat dissipation, and, correspondingly, the length of the time that the panel changes color.
    <Break />
    <Image name="sentient-thermals">Thermal gradient. Large scale simulation (left), small-scale infrared camera (right).</Image>
    <br />
    We fabricated several prototypes using concrete with an outer plaster layer, embedding our wiring at a precise and consistent depth. For larger panels, we use multiple wiring regions for fine-tuned control over thermally actuating changes.
    <Break />
    <p className="citation">Cupkova, D. and Byrne, D., Cascaval, D. 2018. SENTIENT CONCRETE: Developing Embedded Thermal and Thermochromic Interactions for Architecture and Built Environment. In Proceedings of the 23rd International Conference of the Association for Computer-Aided Architectural Design Research in Asia (CAADRIA) 2018, Hong Kong.</p>
    <br />
    <Link src="CAADRIA18">PDF</Link>
  </Post>
);
