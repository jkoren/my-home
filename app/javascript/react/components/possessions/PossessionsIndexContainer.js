// PossessionsIndexContainer.js
import React from "react"
import { Link } from 'react-router-dom'
import PossessionIndexTile from "./PossessionIndexTile"

const PossessionsIndexContainer = (props) => {
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
        <div className="grid-x">
            {possessionTiles}
        </div>
      <div>
        <Link to={`/rooms/${props.room.id}/possessions/new`}>
          Add a New Possession
        </Link>
      </div>
    </div>
  )
}

export default PossessionsIndexContainer
