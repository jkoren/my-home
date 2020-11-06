import React from "react"
import { Link } from 'react-router-dom'

const RoomShowTile = (props) => {
  return(
    <div>
      <h4>{props.data.name}</h4>
      <h6>{props.data.description}</h6>
    </div>
  )
}

export default RoomShowTile