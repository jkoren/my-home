// RoomShowContainer.js
import React, { useState, useEffect } from "react"
import RoomShowTile from "./RoomShowTile"
import PossessionsIndexContainer from "./PossessionsIndexContainer"
import _ from "lodash" 
// import PossessionErrorList from "./PossessionErrorList"
// import PossessionForm from "./PossessionForm"

const RoomShowContainer = (props) => {
  const [room, setRoom] = useState({
    id: "",
    name: "",
    description: ""
  })
  const [possessions, setPossessions] = useState(null)
  // const [errors, setErrors] = useState({})
  // const [error, setError] = useState(null)
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