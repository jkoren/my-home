import React from "react";
import RoomsIndexForDemo from "./rooms/RoomsIndexForDemo"
import { Link } from 'react-router-dom'

const Splash = (props) => {

  return (
    <>
      <div className="grid-x text-center">
        <div className="cell medium-2">
          {/* spacer  */}
        </div>
        <div className="cell medium-8"> 
          <br></br>     
          <h3> The Easiest Way to Manage the Technology in Your Home</h3>
          <img src="https://my-home-development.s3.amazonaws.com/uploads/site/nice-house.jpg"></img>
        </div>
      </div>
      <br></br>
      <div className="grid-x text-center">
        <div className="cell medium-2">
          {/* spacer  */}
        </div>
        <div className="cell small-4">
          <h5>My-Home is a friendly app that holds information on the devices in your life</h5>
        </div>
        <div className="cell small-4">
          {/* <br></br> */}
          {/* <h5>Sign In</h5> */}
        </div>
      </div>


    </>
  )
}

export default Splash;
