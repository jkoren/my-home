// RoomsIndexPage.js
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
    // let poster
    // if (room.room_poster.url) {
      //   poster = <img className="poster" src={room.room_poster.url} alt="room poster" />
      // }
    
    return (
        <div className="callout secondary cell small-12 medium-4">
          <Link to={`/rooms/${room.id}`}>
            <h3>{room.name}</h3> 
            <p>{room.description}</p>
              <div className="text-center">
                <img src="https://secure.img1-fg.wfcdn.com/im/49278377/resize-h600%5Ecompr-r85/5706/57068565/Portland+4+-+Light+Kitchen+Island+Linear+Pendant.jpg" alt="room image" width="150" />
              </div>
          </Link>
      </div>
    )
  })

  return (
    <div>
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          {roomListItems}
        </div>
      </div>

      <div className="grid-container">
        <Link to={`/room/new`}>Add a New Room </Link>
      </div>

    </div>
  )
}

export default RoomsIndexPage
