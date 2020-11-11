import React from "react"
import { Link } from "react-router-dom";

const RoomIndexTile = (props) => {
  return(
    <div className="callout cell small-12 medium-3 hover-zoom box-shadow">
      <Link to={`/rooms/${props.data.id}`}>
        {/* <h4 className="field">{props.data.name}</h4> */}
        <h6 className="field">Repair professional</h6>
      
        {/* <div className="text-center">
          <img src={props.data.image} alt="room image" width="250" />
        </div> */}

      </Link>
    </div>
  )
}

export default RoomIndexTile