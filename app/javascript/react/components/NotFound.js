import React from "react";
import { Link } from 'react-router-dom'

const NotFound = (props) => {
  return (
    <>
      <>
        <br></br>{/* spacer */}
      </>

      <div className="cell small-offset-1 medium-offset-3 ">
        <div className="grid-x grid-margin-y text-center">
          <div className="callout cell small-10 medium-6 box-shadow">
            <h2 className="cell"> Not Found </h2>
            <h4 className="cell"> Please sign into create your domain and see all your possessions.</h4>
            <h3 className="cell"> Be the master of your domain. </h3>
          </div>
        </div>
      </div>

      <div className="cell text-center">
        <br></br>
        <Link to={`/`}>
          <div>
            Sample page:
          </div>
        <img src="https://my-home-production.s3.amazonaws.com/uploads/promotional/possession_page.png" width="750" className="callout box-shadow"></img>
        </Link>      
      </div>
    </>
  )
}

export default NotFound;
