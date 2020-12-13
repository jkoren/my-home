// ResidencesIndexContainer.js
import React, { useEffect, useState } from "react"
import ResidenceIndexTile from "./ResidenceIndexTile"

const ResidencesIndexContainer = (props) => {
  let residenceTiles = props.residences.map((residenceObject) => {
      return <ResidenceIndexTile 
        key={residenceObject.id} 
        data={residenceObject} 
      />
  })

  return (
    <div>
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          {residenceTiles}
        </div>
      </div>
    </div>
  )
}

export default ResidencesIndexContainer
