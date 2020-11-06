// PossessionsIndexContainer.js
import React from "react"
import { Link } from 'react-router-dom'
import PossessionIndexTile from "./PossessionIndexTile"

const PossessionsIndexContainer = (props) => {
  let possessionList
  if (!_.isEmpty(props.possessions)) {
    possessionList = props.possessions.map((possessionObject) => {
      return <PossessionIndexTile key={possessionObject.id} data={possessionObject} />
    }
  )}

  return (
    <div>
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          {possessionList}
        </div>
      </div>

      <div className="grid-container">
        <Link to={`/possession/new`}>Add a New Possession </Link>
      </div>
    </div>
  )
}

export default PossessionsIndexContainer
