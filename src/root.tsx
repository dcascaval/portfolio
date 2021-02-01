import React from "react";
import { Section, render } from "./elements";

export const PROJECTS = "projects";
export const RESUME = "resume";

import Intro from "./intro";
import Bio from "./bio";
import Navbar from "./navbar";
import Impala from "./projects/impala";
import DAG from "./projects/dag";
import NBBJ from "./projects/nbbj";
import Concrete from "./projects/sc";

import DesignComputation from "./resume/dc";
import Join from "./resume/join";
import TA from "./resume/ta";

const Head = () => (
  <head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.2, shrink-to-fit=no" />
    <meta name="description" content="Architecture and Computational Design" />
    <meta name="keywords" content="Architecture, Design, Computation, Environment, Research" />
    <meta name="author" content="Dan Cascaval" />
    <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto+Slab:wght@400;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="minireset.css" />
    <link rel="stylesheet" href="dist/styles.css" />
    <title>Dan Cascaval</title>
    <script src="src/actions.js" />
  </head>
);

const Body = () => (
  <body className="preload">
    <div className="root">
      <Bio />
      <div className="content-wrapper">
        <Navbar />
        <div className="main-content">
          <Section title={PROJECTS} classes="show">
            <Intro />
            <Impala />
            <DAG />
            <NBBJ />
            <Concrete />
          </Section>
          <Section title={RESUME} classes="fade">
            <Join />
            <DesignComputation />
            <TA />
          </Section>
        </div>
      </div>
    </div>
  </body>
);

render(
  <html>
    <Head />
    <Body />
  </html>
);
