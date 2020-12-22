import React from "react";
import ActivitiesContainer from "./ActivitiesContainer"
import { Link } from 'react-router-dom'

const Activities = (props) => {
  
  return (
    <div>
      <>
        <br></br>{/* spacer */}
      </>

      <div className="cell medium-offset-1 ">
        <div className="grid-x">

          <div className="callout cell box-shadow text-center">
            <h5 className="cell"> Activities </h5>
          </div>

          <ActivitiesContainer/>

        </div>
      </div>


    </div>
  )
}

export default Activities;
