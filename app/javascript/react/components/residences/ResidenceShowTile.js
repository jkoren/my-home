import React from "react"

const ResidenceShowTile = (props) => {
  return (
    <div className="grid-x grid-padding-x">
      
      <div className="medium-4">
        {/* spacer cell */}
      </div>

      <h4>{props.data.street} {props.data.display_area}</h4> 

    </div>
  )
}

export default ResidenceShowTile