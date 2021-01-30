import React from "react";
import { Link } from "./elements";

export default () => (
  <div className="sidebar">
    <div className="headshot">
      <img src="images/dan.jpg"></img>
    </div>
    <p className="bio">Dan Cascaval</p>
    <p className="email">cascaval@cs.washington.edu</p>
    <p className="links">
      <Link>Github</Link>
      <Link>Instagram</Link>
    </p>
  </div>
);
