import React from "react"
import { Link } from "react-router-dom";

const RoomIndexTile = (props) => {
  return(
    <div className="callout cell small-12 medium-3 hover-zoom box-shadow">
      <Link to={`/rooms/${props.data.id}`}>
        <h4 className="field">{props.data.name}</h4>
        <h5 className="field">{props.data.description} </h5>
      
        <div className="text-center">
          <img src="https://secure.img1-fg.wfcdn.com/im/49278377/resize-h600%5Ecompr-r85/5706/57068565/Portland+4+-+Light+Kitchen+Island+Linear+Pendant.jpg" alt="room image" width="150" />
        </div>

        {/* <div className="text-center">
          <img src={duck.duck_photo} alt="room image" width="150" />
        </div> */}

      </Link>
    </div>
  )
}

export default RoomIndexTile