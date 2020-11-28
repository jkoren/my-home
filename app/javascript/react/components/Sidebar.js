import React from "react";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <div className={props.classes}>
      <div className="grid-x grid-padding-x">
        {/* commented out until can get spacing on mobile correct */}
        {/* <Link className="cell sidebar" to="/realtors">
          My Home
        </Link>
        <Link className="cell sidebar" to="/realtors">
          Add Possessions
        </Link>
        <Link className="cell sidebar" to="/">
          Demo Residence
        </Link>
        <Link className="cell sidebar" to="/about">
          About
        </Link> */}
      </div>
    </div>
  );

}

export default Sidebar
