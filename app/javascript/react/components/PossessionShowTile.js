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
          
          <div className="grid-x grid-margin-x">
            <div className="small-12 medium-6 text-center">
              <div>
                <h5>
                  <a href={props.data.owners_manual}> 
                    Owner's Manual
                    <i class="fa fa-book fa-4x"></i>
                  </a>
                </h5>
              </div>
            </div>
            <div className="small-12 medium-6 text-center">
              <div>
                <h5>
                  <a href={props.data.URL}>
                    Manufacturer Web Site
                    <i class="fa fa-desktop fa-4x"></i>
                    </a>
                </h5>
              </div>
            </div>
          </div>


        <div className="grid-x grid-margin-x">
          <div className="small-12 medium-6 text-center">
            <div>
              <h5>
                <a href={props.data.operating_video}>
                  Operating Video
                  <i class="fab fa-youtube fa-4x"></i>
                </a>
              </h5>
            </div>
          </div>
          <div className="small-12 medium-6 text-center">
            <div>
              <h5>
                <a href={props.data.purchase_receipt}>
                  Purchase Receipt
                    <i class="fa fa-file-alt fa-4x"></i>
                </a>
              </h5>
            </div>
          </div>
        </div>


        <div className="grid-x grid-margin-x">
          <div className="small-12 medium-6 text-center">
            <div>
              <h5>
                <a href={props.data.warranty}>
                  Warranty Document
                  <i class="fa fa-file-alt fa-4x"></i>
                </a>
              </h5>
            </div>
          </div>
          <div className="small-12 medium-6 text-center">
            <div>
              <h5>
                <a>

                </a>
              </h5>
            </div>
          </div>
        </div>


        </div> 

        <div className="cell small-12 medium-3">
          <i className="fas fa-tools fa-3x"></i>
          Repair experts near you:
        </div>
      </div>

  )
}

export default PossessionShowTile