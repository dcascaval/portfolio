import React from "react";
import { PROJECTS, RESUME } from "./root";

export default () => (
  <nav className="navbar">
    <ul>
      {/*@ts-ignore */}
      <li className="active" __click={`switchTo('${PROJECTS}')`}>
        Projects
      </li>
      {/*@ts-ignore */}
      <li __click={`switchTo('${RESUME}')`}>Resume</li>
    </ul>
  </nav>
);
