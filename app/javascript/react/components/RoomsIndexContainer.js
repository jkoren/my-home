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
        <Link to={`/room/new`}>Add a New Room</Link>
      </div>
    </div>
  )
}

export default RoomsIndexContainer
