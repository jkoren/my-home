// ProfessionalIndexTile.js
import React from "react"

const ProfessionalIndexTile = (props) => {
  return (
    <div className="small-12 medium-6 large-3 cell callout hover-zoom box-shadow business-card ">
        <h6>{props.data.name}</h6>
        {props.data.address1} -
        {props.data.city} {props.data.state}<br></br>
        {props.data.display_phone}<br></br>
        Yelp Rating:{props.data.rating}<br></br>
    </div>
  )
}

export default ProfessionalIndexTile