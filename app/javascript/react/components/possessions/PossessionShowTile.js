//PossessionShowTile.js
import React from "react"
import YelpApplianceRepairProIndexTile from "../YelpApplianceRepairProIndexTile"
import { Link } from "react-router-dom";

const PossessionShowTile = (props) => {

  // to handle cases where there is no aws file, and color font appropriately

  // this may not be necessary, all data may now have a .url field, not that uploaders are set.  (once db:seed is run)
  let aws_image_url = (props.possession.aws_image ? props.possession.aws_image.url : nil)
  let aws_owners_manual_url = (props.possession.aws_owners_manual ? props.possession.aws_owners_manual.url : nil)
  let aws_purchase_receipt_url = (props.possession.aws_purchase_receipt ? props.possession.aws_purchase_receipt.url : nil)
  let aws_warranty_url = (props.possession.aws_warranty ? props.possession.aws_warranty.url : nil)

  let aws_owners_manual_icon = (props.possession.aws_owners_manual.url ? 
    "fa fa-book fa-1x does_exist" : 
    "fa fa-book fa-1x doesnt_exist")

  let aws_warranty_icon = (props.possession.aws_warranty.url ? 
    "fa fa-file-alt fa-1x does_exist":
    "fa fa-file-alt fa-1x doesnt_exist")

  let aws_purchase_receipt_icon = (props.possession.aws_purchase_receipt.url ? 
    "fa fa-file-alt fa-1x does_exist":
    "fa fa-file-alt fa-1x doesnt_exist")

  let URL_icon = (props.possession.URL ? 
    "fa fa-desktop fa-1x does_exist":
    "fa fa-desktop fa-1x doesnt_exist")

  let operating_video_icon = (props.possession.operating_video ? 
    "fab fa-youtube fa-1x does_exist":
    "fab fa-youtube fa-1x doesnt_exist")

  let operating_video_thumbnail = (props.possession.operating_video ? 
    "https://my-home-production.s3.amazonaws.com/uploads/thumbnails/youtube_thumbnail.png" :
    "")

  let manufacturers_site_thumbnail = (props.possession.URL ? 
    "https://my-home-production.s3.amazonaws.com/uploads/thumbnails/website_thumbnail.png" :
    "")

  return (
    <div className="grid-x grid-padding-x">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />
      <div className="cell">
        <h4>{props.possession.name}</h4>
        <h5>{props.possession.manufacturer} {props.possession.model}</h5>
      </div> 

        <div className="cell small-12 medium-3">
          <img src={aws_image_url} alt="no picture" width="450" />
        </div>

        <div className="cell small-12 medium-6 text-left">
          <h5>{props.possession.description}</h5>
          
          <div className="grid-x grid-margin-x">
          <div className="small-12 medium-6 text-center callout">
              <div>
              <a href={aws_owners_manual_url} target="_blank"> 
                <h5>Owner's Manual</h5>
                <i className={aws_owners_manual_icon}></i>
                <div>
                  <embed src={aws_owners_manual_url} height="250" />
                </div>
              </a>
            </div>
          </div>
          <div className="small-12 medium-6 text-center callout">
              <div>
              <a href={props.possession.URL} target="_blank">
                  <h5>Manufacturer Site</h5>
                  <div>
                    <i className={URL_icon}></i>
                  </div>
                <img src={manufacturers_site_thumbnail} width="250"></img>
                </a>
              </div>
            </div>
          </div>


        <div className="grid-x grid-margin-x">
          <div className="small-12 medium-6 text-center callout">
            <div>
              <a href={props.possession.operating_video} target="_blank">
                <h5>Operating Video</h5>
                <div>
                  <i className={operating_video_icon}></i>
                </div>
                <img src={operating_video_thumbnail} width="250"></img>
                </a>
            </div>
          </div>
          <div className="small-12 medium-6 text-center callout">
            <div> 
              <a href={aws_purchase_receipt_url} target="_blank">
                <h5>Purchase Receipt</h5>
                <div>
                  <i className={aws_purchase_receipt_icon}></i>
                </div>
                <img src={aws_purchase_receipt_url} 
                  // alt="missing aws picture" 
                  width="250" />
              </a>
            </div>
          </div>
        </div>


        <div className="grid-x grid-margin-x">
          <div className="small-12 medium-6 text-center callout">
            <div>
              <a href={aws_warranty_url} target="_blank">
                <h5>Warranty</h5>
                <div>
                  <i className={aws_warranty_icon}></i>
                </div>
                <img src={aws_warranty_url} alt="" width="250" />
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