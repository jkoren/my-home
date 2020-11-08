import React from "react"
import { Link } from "react-router-dom";

const PossessionShowTile = (props) => {
  return (
    <div className="grid-x grid-padding-x">
      <div className="cell">
        <h4>{props.data.name}</h4>
        <h5>{props.data.manufacturer} {props.data.model}</h5> 
        <img src={props.data.image} alt="missing picture" width="150" />
        <a href={props.data.operating_video}>
          <h5>Operating Video</h5> 
        </a>    
        <h5>Owner's Manual{props.data.owners_manual}</h5>
        <h5>Manufacturer Web Site</h5> {/* <h5>Manufacturer Web Site{props.data.URL}</h5> */}
        <h5>Warranty{props.data.purchase_receipt}</h5>
      </div>
    </div>
  )
}

export default PossessionShowTile