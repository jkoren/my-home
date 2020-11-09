import React from "react"
import { Link } from "react-router-dom";

const PossessionShowTile = (props) => {
  return (
    <div className="grid-x grid-padding-x">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />
      <div className="cell ">
        <h4>{props.data.name}</h4>
        <h5>{props.data.manufacturer} {props.data.model}</h5>
      </div> 

        <div className="cell small-12 medium-3">
          <img src={props.data.image} alt="missing picture" width="450" />
        </div>

        <div className="cell small-12 medium-6 text-left">
          <h5>{props.data.description}</h5>
          
          <h5>
            <i className="fas fa-book fa-3x"> </i>
            Owner's Manual: {props.data.owners_manual}
          </h5>

          <h5>
            <i class="fas fa-desktop fa-3x"></i>
            Manufacturer Web Site: {props.data.URL}  
          </h5>

          <h5>
            <i class="fab fa-youtube fa-3x"></i>
            Operating Video: {props.data.operating_video} 
          </h5>
          <h5>
            <i class="fas fa-file-alt fa-3x"></i>
            Receipt: {props.data.purchase_receipt}
          </h5>

          <h5>
            <i class="fas fa-file-alt fa-3x"></i>
              Warranty: {props.data.warranty}
          </h5>
        </div> 

        <div className="cell small-12 medium-3">
          <i class="fas fa-tools fa-3x"></i>
          Repair experts near you:
        </div>
      </div>

  )
}

export default PossessionShowTile