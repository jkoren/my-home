import React from "react"

const PossessionIndexTile = (props) => {
  return (
    <div className="grid-x grid-padding-x">
      <div className="cell">
        <h4>{props.data.name}</h4>
        <h5>{props.data.manufacturer} {props.data.model}</h5> 
        <h5><a href={props.data.operating_video}>Operating Video</a></h5>     
        <h5>{props.data.image}</h5>  
        <h5>{props.data.owners_manual}</h5>
        <h5>{props.data.URL}</h5>
        <h5>{props.data.purchase_receipt}</h5>
      </div>
    </div>
  )
}

export default PossessionIndexTile