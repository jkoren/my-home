import React from "react"
import { Link } from "react-router-dom";

const RoomIndexTile = (props) => {
  return(
    <div className="callout cell small-12 medium-4 hover-zoom box-shadow">
      <Link to={`/rooms/${props.data.id}`}>
        <h4 className="field">{props.data.name}</h4>
        <h5 className="field">{props.data.description} </h5>

        <div className="text-center">
          <img src={props.data.aws_image.url} alt="no picture" width="250" />
        </div>

      </Link>
    </div>
  )
}

export default RoomIndexTile