//PossessionShowTile.js
import React from "react"
import YelpApplianceRepairProIndexTile from "../YelpApplianceRepairProIndexTile"
import { Link } from "react-router-dom";

const PossessionShowTile = (props) => {

  // to handle cases where there is no aws file
  let aws_image_url = (props.possession.aws_image ? props.possession.aws_image.url : "")
  let aws_owners_manual_url = (props.possession.aws_owners_manual ? props.possession.aws_owners_manual.url : "")
  let aws_purchase_receipt_url = (props.possession.aws_purchase_receipt ? props.possession.aws_purchase_receipt.url : "")
  let aws_warranty_url = (props.possession.aws_warranty ? props.possession.aws_warranty.url : "")

  let youtube_video = `https://www.youtube.com/watch?v=${props.possession.operating_video}`
  let youtube_embed_video = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${props.possession.operating_video}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

  return (
    <div className="grid-x grid-padding-x">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />
      <div className="cell">
        <h4>{props.possession.name}</h4>
        <h5>{props.possession.manufacturer} {props.possession.model}</h5>
      </div> 

        <div className="cell small-12 medium-3">
          <img src={aws_image_url} alt="missing aws picture" width="450" />
        </div>

        <div className="cell small-12 medium-6 text-left">
          <h5>{props.possession.description}</h5>
          
          <div className="grid-x grid-margin-x">
          <div className="small-12 medium-6 text-center callout">
              <div>
              <a href={aws_owners_manual_url}> 
                  <h5>Owner's Manual</h5>
                  <i className="fa fa-book fa-1x"></i>
                  <embed src={aws_owners_manual_url} width="80px" height="105px" />
                {/* <h6> {props.possession.aws_owners_manual.url}</h6> */}
                </a>
              </div>
            </div>
          <div className="small-12 medium-6 text-center callout">
              <div>
                <a href={props.possession.URL}>
                  <h5>Manufacturer Site</h5>
                  <i className="fa fa-desktop fa-1x"></i>
                <h6> {props.possession.URL}</h6>
                </a>
              </div>
            </div>
          </div>


        <div className="grid-x grid-margin-x">
          <div className="small-12 medium-6 text-center callout">
            <div>
                <a href={youtube_video}>
                  <h5>Operating Video</h5>
                  <i className="fab fa-youtube fa-1x"></i>
                  Thumbnail
                  <h6> {props.possession.operating_video}</h6>

                {/* should be 

                youtube video:
                https://www.youtube.com/watch?v=g_dfzV2EiU8

                youtube embed video
                <iframe width="560" height="315" src="https://www.youtube.com/embed/g_dfzV2EiU8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                
                </a>
            </div>
          </div>
          <div className="small-12 medium-6 text-center callout">
            <div> 
              <a href={aws_purchase_receipt_url}>
                <h5>Purchase Receipt</h5>
                <i className="fa fa-file-alt fa-1x"></i>

                <img src={aws_purchase_receipt_url} alt="missing aws picture" width="450" />

                {/* <h6> {props.possession.purchase_receipt_url}</h6> */}
                {/* <embed src={aws_purchase_receipt_url} width="80px" height="105px" />  */}
              </a>
            </div>
          </div>
        </div>


        <div className="grid-x grid-margin-x">
          <div className="small-12 medium-6 text-center callout">
            <div>
              
              <a href={aws_warranty_url}>
                <h5>Warranty</h5>
                <i className="fa fa-file-alt fa-1x"></i>
                {/* <h6> {props.possession.warranty}</h6> */}
                <embed src={aws_warranty_url} width="80px" height="105px" />
                
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