// PossessionIndexTile.js
import React from "react"
import { Link } from "react-router-dom";

const PossessionIndexTile = (props) => {
  return (
    <div className="callout cell hover-zoom box-shadow small-12 medium-4">
      <Link to={`/possessions/${props.data.id}`}>
        <h4>{props.data.name}</h4>
        <h5>{props.data.manufacturer} {props.data.model}</h5> 
        <div className="text-center">
          <img src={props.data.aws_image.url} alt="no picture" width="150" />
        </div>
      </Link>
    </div>
  )
}

export default PossessionIndexTile