// RoomShowContainer.js
import React, { useState, useEffect } from "react"
import RoomShowTile from "./RoomShowTile"
import PossessionsIndexContainer from "./PossessionsIndexContainer"
import _ from "lodash" 

const RoomShowContainer = (props) => {
  const [room, setRoom] = useState({
    id: "",
    name: "",
    description: ""
    // ,
    // possessions: []
  })

  const id = props.match.params.id 

  useEffect(() => {
    fetch(`/api/v1/rooms/${id}`, {
      credentials: "same-origin"
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
          throw(error);
        }
      })
      .then((responseBody) => {
        setRoom(responseBody)
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`))
  }, [])

  // debugger // returning room and possessions

  let roomShow
  if (!_.isEmpty(room)) {
    roomShow = <RoomShowTile
      key={room.id}
      data={room}
    />
  }
  return (
    <div>
      <div className="text-center">
        {roomShow}
      </div>

      <PossessionsIndexContainer 
          room={room}
          possessions={room.possessions}
      />
    </div>
  )
}

export default RoomShowContainer 