import React from "react";
import { Link, Post, Break, Image } from "../elements";

export default () => (
  <Post title="Impala" subtitle=" Parallel, high performance component library for Grasshopper3D.">
    <img src="images/icon_banner_3.png"></img>
    <Link>Grasshopper3D</Link> is a visual programming language for creating parametric models embedded in the CAD platform <Link>Rhino3D</Link>. It works as a directed graph of components, each performing an operation, that send trees of data along edges to trigger recomputation. <Break />
    <Link>Impala</Link> dramatically improves the performance of Grasshopper on models that handle large amounts of data. At its core, it provides a reimplementation of standard components to run in parallel as a drop-in replacement to the Grasshopper standard library. Impala is excellent for processing <em>point clouds</em>, <em>landscape data</em>, and
    <em>physical simulations</em>.<Break /> Impala combines this strategy with a few key insights to maximize the available performance benefit:
    <ul>
      <li>
        <em>Minimize allocation overhead.</em> Impala re-implements the basic data tree structure. This allows space to be preallocated, trees to be filled in parallel, and a compact encoding of tree paths.
      </li>
      <li>
        <em>Restrict type-casts.</em> Impala assumes a homogenous type of data in a tree, as is nearly always the case in practice. This allows type conversions to happen much more quickly for large data trees.
      </li>
      <li>
        <em>Algorithmic optimization.</em> Impala replaces some quadratic implementations in the standard library with custom strategies that have improved parallel complexity.
      </li>
    </ul>
    Drop-in replacement of existing components with Impala variants yielded
    <em>speedups of 10-20x</em> relative to the base Grasshopper implementation on a mix of standard and randomly-generated workloads. More speedup is achieved in adversarial cases, or where several Impala components can be chained together. Additionally, using Impala can significantly reduce the memory overhead used by a Grasshopper script, resulting in smoother overall interactivity.
  </Post>
);
