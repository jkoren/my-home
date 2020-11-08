// RoomsIndexContainer.js
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import RoomIndexTile from "./RoomIndexTile"

const RoomsIndexContainer = (props) => {
  const [rooms, setRooms] = useState([])
  
  // use props.match.params.id to get residence number and then fetch residence info for header?
  useEffect(() => {
    fetch("/api/v1/rooms", {
      credentials: "same-origin"
    })
      .then(response => {
        if (response.ok) {
          return response
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage)
          throw error
        }
      })
      .then(response => response.json())
      .then(body => {
        setRooms(body)
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])
  let roomListTiles = rooms.map((roomObject) => {
    return <RoomIndexTile 
        key={roomObject.id} 
        data={roomObject} 
        />
  })

  return (
    <div>
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
         {roomListTiles}
        </div>
      </div>

      <div className="grid-container">
        <Link to={`/room/new`}>Add a New Room</Link>
      </div>
    </div>
  )
}

export default RoomsIndexContainer
