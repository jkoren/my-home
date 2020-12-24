import React from "react"
import { Link } from "react-router-dom";

const ResidenceShowTile = (props) => {
  return (
    <>
      <div className="grid-x grid-padding-x">
        
        <div className="medium-4">
          {/* spacer cell */}
        </div>
        <Link to={`/residences`}>
          <h4>{props.data.street} {props.data.display_area}</h4> 
        </Link>
      </div>
{/* 
      <div className="grid-x grid-padding-x medium-offset-3 text-center">
          <pre>
            {props.data.note}
          </pre>
      </div> */}

    </>
  )
}

export default ResidenceShowTile