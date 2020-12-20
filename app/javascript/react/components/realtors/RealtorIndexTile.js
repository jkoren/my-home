import React from "react"
import { Link } from "react-router-dom";

const RealtorIndexTile = (props) => {
  return (
    <div className="callout cell small-12 medium-6 hover-zoom box-shadow">
      <Link to={`/realtors/${props.data.id}`}>
        <h4>{props.data.name}</h4>
        <h5>{props.data.company}</h5> 
        <div className="text-center">
          <img src={props.data.aws_image.url} alt="no picture" 
          width="150" />
        </div>
      </Link>
    </div>
  )
}

export default RealtorIndexTile