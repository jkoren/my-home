import React from "react";
import PossessionsNewestContainer from "./possessions/PossessionsNewestContainer"
import PossessionsLeadersContainer from "./possessions/PossessionsLeadersContainer"
import { Link } from 'react-router-dom'

const Splash = (props) => {
  let newPossessions = PossessionsNewestContainer()
  let leaders = PossessionsLeadersContainer()
  return (
    <>
      <div className="grid-x text-center grid-margin-x grid-padding-x">
        <div className="cell medium-2">
          {/* spacer  */}
        </div>
        <div className="cell medium-4"> 
          <br></br>     
          <h3> The Easiest Way to Manage the Technology in Your Home</h3>
          <img src="https://my-home-development.s3.amazonaws.com/uploads/site/nice-house.jpg"></img>
        </div>
        <div className="cell medium-4"> 
          <br></br>     
            {leaders}
        </div>
      </div>
      <br></br>
      <div className="grid-x text-center grid-margin-x grid-padding-x">
        <div className="cell medium-2">
          {/* spacer  */}
        </div>
        <div className="cell small-12 medium-4">
          <h5>My-Home is a friendly app that holds information on the devices in your life</h5>
        </div>
        <div className="cell small-12 medium-4">
        </div>
      </div>
      <div className="grid-x text-center grid-margin-x grid-padding-x">
        <div className="cell medium-2">
          {/* spacer  */}
        </div>
        <div className="cell small-12 medium-4">
          {newPossessions}
        </div>
        <div className="cell small-12 medium-4">
          <h5 className="callout">
            <a href='/users/sign_in'>Sign In</a>
          </h5>
          <h5>To get the most value from My-Home, create a log in and store your possessions and important facts about them. </h5>
          <h5>A small investment in time will give a huge payoff when you are using your favorite things.
          </h5>
        </div>
      </div>


    </>
  )
}

export default Splash;
