import React from "react"
import { Link } from "react-router-dom";

const ResidenceShowTile = (props) => {
  return (
    <>
      <Link to={`/residences`}>
        <h4><center>{props.residence.street} {props.residence.display_area}</center></h4> 
      </Link>


    <div className="grid-x grid-padding-x">

      <div className="cell medium-1">
        {/* spacer */}
      </div>

      <pre className="cell medium-10"> 
        <center>
          {props.residence.note}
        </center>
      </pre>

    </div>

    </>
  )
}

export default ResidenceShowTile