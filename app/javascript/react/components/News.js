import React from "react";
import PossessionsNewestContainer from "./possessions/PossessionsNewestContainer"
import PossessionsLeadersContainer from "./possessions/PossessionsLeadersContainer"

const News = (props) => {
  
  return (
    <div>
      <>
        <br></br>{/* spacer */}
      </>
      <div className="cell medium-offset-1">
        <div className="grid-x">
          <div className="callout cell box-shadow text-center medium-10">
            <h5 className="cell"> News </h5>
          </div>
          <PossessionsNewestContainer/>
        </div>
      </div>

      <div className="cell medium-offset-1 ">
        <div className="grid-x">
          {/* <div className="callout cell box-shadow text-center">
            <h5 className="cell"> Leaders </h5>
          </div> */}
          <PossessionsLeadersContainer/>
        </div>
      </div>
    </div>
  )
}

export default News;
