import React from "react";
import RoomsIndexForDemo from "./rooms/RoomsIndexForDemo"
import { Link } from 'react-router-dom'

const AboutPage = (props) => {
  // let current_user = document.getElementById('cusr')
  // { current_user.dataset.owner === current_user.dataset.currentUser ? "Yes" : "No!" }
  // from https://medium.com/@mayneweb/using-devise-current-user-in-reactjs-for-restriction-49b1b2b772ce
  
  return (
    <div>
      <>
        <br></br>{/* spacer */}
      </>

      <div className="cell small-offset-1 medium-offset-2 ">
        <div className="grid-x grid-margin-y text-center">
          <div className="callout cell small-10 medium-8 box-shadow">
            <h3 className="cell"> My-Home </h3>
            <h5 className="cell"> With all the equipment in our homes these days, I thought we could use a site to help us manage everything.  What do we own?  Where are the operating instructions?  Does it have a web site?  When did we buy it?  Is it still under warranty? </h5>

            <h5 className="cell"> This website is for those of us who have lost the owner's manuals. </h5>

            <h5 className="cell"> Be technology-fabulous.  Be the master of your domain. </h5>
            <br></br>
            <div className="cell">
              <h6>Created by: Jeff Korenstein / j.korenstein@gmail.com</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="cell text-center">
        <br></br>
        <Link to={`/residences`}>
          {/* only do this if logged in, otherwise go to /pleasesignin  */}
        <b>See My Home</b>
        </Link>      
      </div>

      <div className="cell text-center">
        <br></br>
        <Link to={`/demo`}>
          <div>
            Sample Page:
          </div>
        <img src="https://my-home-production.s3.amazonaws.com/uploads/promotional/possession_page.png" width="750" className="callout box-shadow"></img>
        </Link>      
      </div>
    </div>
  )
}

export default AboutPage;
