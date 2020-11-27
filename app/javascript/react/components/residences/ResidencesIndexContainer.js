// ResidencesIndexContainer.js
import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
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

      {/* right now for alpha-test purposes, residences_controller sets all new residences to "no realtor" so disable this capability for now */}
      {/* <div className="grid-container">
        <Link to={`/realtors/${props.realtor.id}/residences/new`}>
        Add a New Residence for this Realtor</Link>
      </div> */}

    </div>
  )
}

export default ResidencesIndexContainer
