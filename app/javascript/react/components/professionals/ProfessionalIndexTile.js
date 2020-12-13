// ProfessionalIndexTile.js
import React from "react"

const ProfessionalIndexTile = (props) => {
  return (
    <div className="small-12 medium-6 large-3 cell callout hover-zoom box-shadow ">
        <h6>{props.data.name}</h6>
        <p>{props.data.address1}</p>
        <p>{props.data.city} {props.data.state}</p>
        <p>{props.data.display_phone}</p>
        <p>Rating:{props.data.rating}</p>
    </div>
  )
}

export default ProfessionalIndexTile