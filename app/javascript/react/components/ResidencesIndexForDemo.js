// ResidencesIndexContainer.js
import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import ResidenceIndexTile from "./ResidenceIndexTile"

// because this is for a demo, it has a Fetch Get



const ResidencesIndexContainer = () => {
  let residenceTiles = residences.map((residenceObject) => {
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

      <div className="grid-container">
        <Link to={`/residence/new`}>Add a New Residence for this Realtor</Link>
      </div>
    </div>
  )
}

export default ResidencesIndexContainer
