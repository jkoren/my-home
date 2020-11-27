// RoomsIndexContainer.js
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import RoomIndexTile from "./RoomIndexTile"
import _ from "lodash" 

const RoomsIndexContainer = (props) => {
  let roomTiles = null
  if (!_.isEmpty(props.rooms)) {
      roomTiles = props.rooms.map((roomObject) => {
      return <RoomIndexTile 
          key={roomObject.id} 
          data={roomObject} 
          />
    })
  }

  return (
    <div>
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          {roomTiles} 
        </div>
      </div>

      <div className="grid-container">
        <Link to={`/residences/${props.residence.id}/rooms/new`}>Add a New Room</Link>
      </div>

      <div className="grid-container">
        <Link to={`/residences/${props.residence.id}/rooms/new`}>Change The Information For This Residence</Link>
      </div>

      <div className="grid-container">
        <Link to={`/residences/${props.residence.id}/rooms/new`}>Delete This Residence</Link>
      </div>

    </div>

    
  )
}

export default RoomsIndexContainer
