// RoomsIndexContainer.js
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import RoomIndexTile from "./RoomIndexTile"

const RoomsIndexContainer = (props) => {
  const [rooms, setRooms] = useState([])
  
  useEffect(() => {
    // do another fetch to get the address information? for demo purposes only showing one house
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

  let address = "315 College Farm Rd #6, Waltham, MA"
  
  let roomListTiles = rooms.map((roomObject) => {
    return <RoomIndexTile 
        key={roomObject.id} 
        data={roomObject} 
        />
  })

  return (
    <div>
          {/* the below line isn't working - does not convert to one per line (12/12) on a small screen - I think broke when I added address */}
          {/* <div className="small-12 medium-4"> */}
      <div className="cell small-12 medium-4 text-center">
        <h4> {address} </h4>
      </div>

      <div className="grid-container">
        <div className="grid-x grid-margin-x">
                    {roomListTiles} 
          {/* </div> */}

        </div>
      </div>

      <div className="grid-container">
        <Link to={`/room/new`}>Add a New Room</Link>
      </div>
    </div>
  )
}

export default RoomsIndexContainer
