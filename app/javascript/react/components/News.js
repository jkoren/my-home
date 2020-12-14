import React from "react";
import PossessionsNewsContainer from "./possessions/PossessionsNewsContainer"
import { Link } from 'react-router-dom'

const AboutPage = (props) => {
  
  return (
    <div>
      <>
        <br></br>{/* spacer */}
      </>

      <div className="cell medium-offset-1 ">
        <div className="grid-x">

          <div className="callout cell box-shadow text-center">
            <h5 className="cell"> News </h5>
          </div>
          <div className="grid-x text-left">
            <h4>Items Just Added:</h4>
          </div>
          <PossessionsNewsContainer/>

        </div>
      </div>



    </div>
  )
}

export default AboutPage;
