import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {

  return (
    <div className={props.classes}>
      <div className="grid-x grid-padding-x">
        <Link className="cell navbar" to="/realtors">
          My Home
        </Link>
        <Link className="cell navbar" to="/realtors">
          Add Possessions
        </Link>
        <Link className="cell navbar" to="/">
          Demo Residence
        </Link>
        <Link className="cell navbar" to="/about">
          About
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
