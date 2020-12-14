// PossessionNewsTile.js
import React from "react"
import { Link } from "react-router-dom";

const PossessionNewsTile = (props) => {
  return (
    <div className="cell">
      <h5>{props.data.name} {props.data.manufacturer} {props.data.model} ({props.data.display_location})</h5> 
    </div>
  )
}

export default PossessionNewsTile