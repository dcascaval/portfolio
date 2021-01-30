import React from "react";
import { Link, Post } from "../elements";

export default () => (
  <Post
    title="Carnegie Mellon"
    subtitle="Teaching & Research Assistant, 2016-2019"
  >
    At Carnegie Mellon I did research under
    <em>
      <Link>Dana Cupkova</Link>
    </em>
    ,
    <em>
      <Link>Josh Bard</Link>
    </em>
    , and
    <em>
      <Link>Daragh Byrne</Link>
    </em>
    . I brought a unique knowledge of computation to the table and wrote some
    software that is still used in the labs today. This included work in:
    <ul>
      <li>
        <em>
          <Link src="robarch-paper">Robotic manufacturing</Link>
        </em>
        of architectural-scale concrete panels to allow a wider variety of forms
        and faster production without using molds
      </li>
      <li>
        <em>Design optimization</em> for concrete panels to have precise thermal
        properties derived from their surface geometry
      </li>
      <li>
        <em>
          <Link src="CAADRIA18">Thermally coloring</Link>
        </em>
        panels using embedded, proximity-controlled wiring to create a spidery,
        concrete mood-ring...
      </li>
    </ul>
    <br />
    Throughout my undergraduate experience I also was lucky to discover and
    nurture a love of teaching. I served as a teaching assistant for classes
    whenever I could, including
    <ul>
      <li>
        <em>Compiler Design (Fall 2019)</em>, a graduate/undergraduate compilers
        course focusing on modern compiler optimizations with Prof.
        <Link>Seth Goldstein</Link>
      </li>
      <li>
        <em>Principles of Software Construction (Fall 2018)</em>, an
        undergraduate object-oriented software design and analysis course with
        Profs. <Link>Charlie Garrod</Link> and <Link>Josh Bloch</Link>.
      </li>
      <li>
        <em>
          Computational Techniques for the Built Environment (Spring 2018)
        </em>
        , a design-based seminar bringing interdisciplinary students together to
        do computationally-focused design research under Prof. Dana Cupkova
      </li>
      <li>
        <em>Introduction to Digital Media (Fall 2016 to Spring 2018)</em>
        throughout its many forms, introducing architecture students to
        3D-modeling, rendering, animation, and parametric design, under Prof.
        <Link>Eddy Man Kim</Link>.
      </li>
    </ul>
  </Post>
);
