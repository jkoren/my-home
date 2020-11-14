import React from "react"
import { Link } from "react-router-dom";

const PossessionIndexTile = (props) => {
  return (
    <div className="callout cell small-12 medium-3 hover-zoom box-shadow">
      <Link to={`/possessions/${props.data.id}`}>
        <h4>{props.data.name}</h4>
        <h5>{props.data.manufacturer} {props.data.model}</h5> 
        <div className="text-center">
          <img src={props.data.image} alt="missing picture url" width="150" />
          {/* {props.data.image}
          <img src={props.data.aws_image.url} alt="missing picture on AWS" width="150" /> */}
        </div>
      </Link>
    </div>
  )
}

export default PossessionIndexTile