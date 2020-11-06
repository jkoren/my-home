import React from "react"

const PossessionShowTile = (props) => {
  return (
    <div className="grid-x grid-padding-x">
      <div className="cell">
        <h4>{props.name}</h4>
        <h5>{props.manufacturer} {props.model}</h5> 
        <h5><a href={props.operating_video}>Operating Video</a></h5>     
        <h5>{props.image}</h5>  
        <h5>{props.owners_manual}</h5>
        <h5>{props.URL}</h5>
        <h5>{props.purchase_receipt}</h5>
      </div>
    </div>
  )
}

export default PossessionShowTile