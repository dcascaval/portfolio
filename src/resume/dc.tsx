import React from "react";
import { Link, Post, Break } from "../elements";

export default () => (
  <Post title="NBBJ" subtitle="Design Computation Intern, Summer 2018">
    <em>
      <Link>NBBJ</Link>
    </em>
    is a world-class architecture firm based in Seattle, innovating in
    sustainability and design technology. I interned on the
    <em>Design Computation</em> team, tasked with understanding architectural
    design workflows and finding ways to make design software more efficient,
    scalable, and user-friendly.
    <Break />
    As part of the team, I worked on
    <ul>
      <li>
        <em>Automating</em> facade-modeling tools to handle patterns and allow
        designers to quickly iterate and optimize complex forms.
      </li>
      <li>
        <em>Researching</em> how plugins to surface-modeling tools like Rhino
        can allow for a hybrid of direct and constraint-based modeling
        strategies.
      </li>
      <li>
        <em>Developing</em> tools and strategies to aid interoperability between
        software used both within the firm and externally.
      </li>
    </ul>
    I learned a lot about the dark arts of CAD in practice, and witnessed the
    immense complexity of building-projects first hand, as well as a finer
    appreciation for the <em>impact that good design can have</em> on all of our
    lives.
  </Post>
);
