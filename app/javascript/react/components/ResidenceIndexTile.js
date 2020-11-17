import React from "react"
import { Link } from "react-router-dom";

const ResidenceIndexTile = (props) => {
  return (
    <div className="callout cell small-12 medium-4 hover-zoom box-shadow">
      <Link to={`/residences/${props.data.id}`}>
        <div className="text-center">
          <img src={props.data.image} alt="missing picture" width="350" />
          <h4>{props.data.name}</h4>
          <h5>{props.data.city} {props.data.state}</h5> 
        </div>
      </Link>
    </div>
  )
}

export default ResidenceIndexTile