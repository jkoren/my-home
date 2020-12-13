// ProfessionalIndexTile.js
import React from "react"

const ProfessionalIndexTile = (props) => {
  return (
    <div className="small-12 medium-6 large-3 cell callout hover-zoom box-shadow ">
        <p>{props.data.name}</p>
        <p>{props.data.address1}</p>
        <p>{props.data.city}</p>
        <p>{props.data.phone}</p>
        <p>Rating:{props.data.rating}</p>
    </div>
  )
}

export default ProfessionalIndexTile