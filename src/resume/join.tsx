import React from "react";
import { Link, Post, Break } from "../elements";

export default () => (
  <Post title="Join" subtitle="Software Engineer, 2019-2020">
    <em>
      <Link>Join</Link>
    </em>
    is a San Francisco-based software startup providing intelligent collaboration tools for the construction industry. Construction is an <em>incredibly complex industry</em> with many moving parts, and construction professionals are known for their dedication to the field and for the high demands they place on their tools of choice.
    <Break />
    While at Join, I worked as part of a small, fast-moving product team shipping production-quality code with an eye for making a positive impact in the lives of our users. I had the chance to work on every part of the stack &mdash;
    <ul>
      <li>
        <em>Optimizing</em> Postgres queries to improve whole-application performance
      </li>
      <li>
        <em>Extending and tuning</em> our Golang backend to support new product features
      </li>
      <li>
        <em>Rebuilding and automating</em> our testing infrastructure to support tests that are faster, easier to write, and more reliable
      </li>
      <li>
        <em>Designing and iterating</em> on highly-interactive user-facing web components for cost manipulation and tracking
      </li>
    </ul>
    all with the goal to bring users an efficient, customizable and clear way to manage their projects and tame the complexity of construction.
  </Post>
);
