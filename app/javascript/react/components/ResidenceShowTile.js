import React from "react"

const ResidenceShowTile = (props) => {
  return (
    <div className="grid-x grid-padding-x">
      <div className="cell">
         <h4>{props.data.street} {props.data.city}, {props.data.state}</h4> 
      </div>
    </div>
  )
}

export default ResidenceShowTile