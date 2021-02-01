import React from "react";
import { Link, Post, Break, Image } from "../elements";

export default () => (
  <Post title="DAG" subtitle="Data-parallel programming language compiled for GPU.">
    <img src="images/julia_render.png"></img>
    <Break />
    As part of CMU's <Link>15-418</Link>, Parallel Computer Architecture and Programming, <Link>Nick Roberts</Link> and I designed an implemented a programming language to easily prototype different strategies for parallelisation on the GPU.
    <Break />
    Our basic concept is to represent each program point as an expression node in directed acyclic graph. This directly expresses which nodes contain dependencies. We derive a traversal of this DAG representing a particular parallel execution, and optimize our choices based on statically gathered heuristics such as minimizing memory transfer.
    <Break />
    We directly model regular parallelism inherent in the program as a set of first-class primitive parallel-expressions, which include <code>for</code>, <code>zip_with</code>, <code>filter_with</code>,<code>reduce</code>, <code>scan</code>, <code>range</code>, and <code>transpose</code>. For a detailed description of the semantics of these primitives, the interested reader can refer to the
    <Link src="418-report">full report</Link>.
    <Break />
    Together these allow the user to precisely convey their intent for what should be parallelized. Our compiler then analyzes nested and consecutive parallel-fors and lowers them to
    <Link src="CUDA">CUDA kernel launches</Link>, performing loop fusion and merging nested parallelism in attempting to minimize the number of launches needed.
    <br />
    <Image name="dag">Compiler Structure.</Image>
    <br />
    We demonstrate the efficacy of our system through concise and performant programs performing large matrix multiplications, fractal renderings (seen above), and previous 15-418 course assignments -- all problems that are embarassingly parallel, but somewhat painful to implement. We theorize that this approach would work reasonably well with other parallel GPU backends.
  </Post>
);
