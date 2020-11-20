// RoomsIndexForDemo.js
import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import RoomIndexTile from "./RoomIndexTile"

const RoomsIndexForDemo = () => {
  // because this is for a demo, it has a Fetch Get
  const [rooms, setRooms] = useState([])

  useEffect(() => {
    fetch(`/api/v1/rooms/`, {
      credentials: "same-origin"
    })
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw (error);
        }
      })
      .then(response => response.json())
      .then((body) => {
        setRooms(body)
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`))
  }, [])

  let roomTiles = rooms.map((roomObject) => {
    return <RoomIndexTile
      key={roomObject.id}
      data={roomObject}
    />
  })

  return (
    <div>

      <div className="grid-x grid-padding-x">
        <div className="cell text-center">
          <h4>315 College Farm Rd #6  Waltham, MA</h4>
        </div>
      </div>

      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          {roomTiles}
        </div>
      </div>

      <div className="grid-container">
        <Link to={`/room/new`}>Add a New Room for this Residence</Link>
      </div>
    </div>
  )
}

export default RoomsIndexForDemo
