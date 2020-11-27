//PossessionShowTile.js
import React from "react"
import YelpApplianceRepairProIndexTile from "./YelpApplianceRepairProIndexTile"
import { Link } from "react-router-dom";

const PossessionShowTile = (props) => {
  return (
    <div className="grid-x grid-padding-x">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />
      <div className="cell ">
        <h4>{props.possession.name}</h4>
        <h5>{props.possession.manufacturer} {props.possession.model}</h5>
      </div> 

        <div className="cell small-12 medium-3">
          <img src={props.possession.aws_image.url} alt="missing aws picture" width="450" />
        </div>

        <div className="cell small-12 medium-6 text-left">
          <h5>{props.possession.description}</h5>
          
          <div className="grid-x grid-margin-x">
          <div className="small-12 medium-6 text-center callout">
              <div>
                <a href={props.possession.owners_manual}> 
                    <h5>Owner's Manual</h5>
                    <i className="fa fa-book fa-2x"></i>
                </a>
              </div>
            </div>
          <div className="small-12 medium-6 text-center callout">
              <div>
                <a href={props.possession.URL}>
                  <h5>Manufacturer Site</h5>
                  <i className="fa fa-desktop fa-2x"></i>
                </a>
              </div>
            </div>
          </div>


        <div className="grid-x grid-margin-x">
          <div className="small-12 medium-6 text-center callout">
            <div>
              
                <a href={props.possession.operating_video}>
                  <h5>Operating Video</h5>
                  <i className="fab fa-youtube fa-2x"></i>
                </a>
              
            </div>
          </div>
          <div className="small-12 medium-6 text-center callout">
            <div>
              
                <a href={props.possession.purchase_receipt}>
                  <h5>Purchase Receipt</h5>
                    <i className="fa fa-file-alt fa-2x"></i>
                </a>
              
            </div>
          </div>
        </div>


        <div className="grid-x grid-margin-x">
          <div className="small-12 medium-6 text-center callout">
            <div>
              
                <a href={props.possession.warranty}>
                  <h5>Warranty Document</h5>
                  <i className="fa fa-file-alt fa-2x"></i>
                </a>
              
            </div>
          </div>
          <div className="small-12 medium-6 text-center callout">
            <div>
              <h5>
                <a>
                  {/* placeholder */}
                </a>
              </h5>
            </div>
          </div>
        </div>

        <div className="grid-x align-bottom">
          
          <br></br>

          <div className=" small-12 medium-2">
          </div>

          <div className="small-12 medium-2 text-center hover-zoom">
            <br></br> <br></br> <br></br> <br></br>
            <button
              type="button"
              className="button cell shrink"
              id="edit-possession"
              onClick={props.onEditClickHandler}
            >
              Edit
            </button>
          </div>

          <div className=" small-12 medium-2">
          </div>

          <div className=" small-12 medium-2 text-center hover-zoom">
            <button
              type="button"
              className="button cell shrink"
              id="delete-possession"
              onClick={props.onDeleteClickHandler}
            >
              Delete
            </button>
          </div>
        </div>


      </div> 
{/* 
      <div className="cell small-12 medium-3">
        <i className="fas fa-tools fa-3x"></i>
        Repair experts near you:
        {professionalListTiles} 
      </div> */}
    </div>

  )
}

export default PossessionShowTile