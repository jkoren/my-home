// PossessionNewestTile.js
import React from "react"
import { Link } from "react-router-dom";

const PossessionNewestTile = (props) => {
  return (
    <div className="callout cell small-12 medium-4 hover-zoom box-shadow">
        <h5>{props.data.name} {props.data.manufacturer} {props.data.model}</h5> 
        {/* <div className="text-center">
          <img src={props.data.aws_image.url} alt="missing AWS picture" width="150" />
        </div> */}
    </div>
  )
}

export default PossessionNewestTile