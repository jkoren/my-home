import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

const RoomsIndexPage = (props) => {
  const [rooms, setRooms] = useState([])

  useEffect(() => {
    fetch("/api/v1/rooms.json", {
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

  let roomListItems = rooms.map((room) => {
    let poster
    if (room.room_poster.url) {
      poster = <img className="poster" src={room.room_poster.url} alt="room poster" />
    }
    return (
      <div className="callout secondary cell small-4">
        <Link to={`/rooms/${room.id}`}>
          <h2 className="title" >{room.title} ({room.year})</h2>
          <div>{poster}</div>
        </Link>
      </div>)
  })

  return (
    <div>
      <div className="grid-x grid-margin-x">
        {roomListItems}
      </div>
      <div>
        <Link className="big" to={`/room/new`}>Add a New Room </Link>
      </div>
    </div>
  )
}

export default RoomsIndexPage
