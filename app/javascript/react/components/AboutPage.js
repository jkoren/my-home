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

      <div className="cell small-offset-1 medium-offset-3 ">
        <div className="grid-x grid-margin-y text-center">
          <div className="callout cell small-10 medium-6 box-shadow">
            <h2 className="cell"> My-Home </h2>
            <h4 className="cell"> My-Home is a single site for information on using your technology. It’s a site for manuals and operating videos, and to find repair professionals. </h4>
            {/* <h3 className="cell"> Be technology-fabulous. </h3> */}
            <h3 className="cell"> Be the master of your domain. </h3>
            <br></br>
            <div className="cell">
              <h4>Created by: Jeff Korenstein / j.korenstein@gmail.com</h4>
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
