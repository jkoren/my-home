// RealtorsIndexContainer.js
import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import RealtorIndexTile from "./RealtorIndexTile"

const RealtorsIndexContainer = (props) => {
  let realtorTiles
  if (!_.isEmpty(props.realtors)) {
    realtorTiles = props.realtors.map((realtorObject) => {
      return (
        <RealtorIndexTile
          key={realtorObject.id}
          data={realtorObject}
        />
      )
    })
  }

  return (
    <div>
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          {realtorTiles}
        </div>
      </div>

      <div className="grid-container">
        <Link to={`/realtor/new`}>Add a New Realtor</Link>
      </div>
    </div>
  )
}

export default RealtorsIndexContainer
