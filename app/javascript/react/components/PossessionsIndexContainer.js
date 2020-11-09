// PossessionsIndexContainer.js
import React from "react"
import { Link } from 'react-router-dom'
import PossessionIndexTile from "./PossessionIndexTile"

const PossessionsIndexContainer = (props) => {
  // debugger
  // does :id = room id?  how about props? for Link to statement below
  // props seems to be undefined
  let possessionTiles
  if (!_.isEmpty(props.possessions)) {
    possessionTiles = props.possessions.map((possessionObject) => {
      return ( 
        <PossessionIndexTile 
          key={possessionObject.id} 
          data={possessionObject} 
        />
      )
    })
  }
  return (
    <div>
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          {possessionTiles}
        </div>
      </div>

      <div className="grid-container">
        <Link to={`/rooms/${props.room.id}/possessions/new`}>Add a New Possession </Link>
      </div>
    </div>
  )
}

export default PossessionsIndexContainer
