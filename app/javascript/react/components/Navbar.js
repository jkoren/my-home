import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {

  return (
    <div className={props.classes}>
      <div className="grid-x grid-padding-x">
        <Link className="cell" to="/realtors">
          Set Up Your Home
        </Link>
        <Link className="cell" to="/realtors">
          Add Possessions
        </Link>
        <Link className="cell" to="/">
          See Demo Residence
        </Link>
        <Link className="cell" to="/about">
          About
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
