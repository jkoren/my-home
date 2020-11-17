import React from "react"
import { Link } from "react-router-dom";

const ResidenceShowTile = (props) => {
  return (
    <div className="grid-x grid-padding-x">
      <div className="cell">
         <h4>{props.data.street} {props.data.city} {props.data.state}</h4>
        <img src={props.data.image} alt="missing picture" width="450" />   
        <h5>Line 1</h5>
        <h5>Line 2</h5>
        <h5>Rooms</h5>
      </div>
    </div>
  )
}

export default ResidenceShowTile