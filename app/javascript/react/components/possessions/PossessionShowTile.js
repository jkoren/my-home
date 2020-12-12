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

    let aws_image_html // not used yet
    if (props.possession.aws_image.url.toLowerCase().endsWith("pdf")) {
      aws_image_html = 
        (<div> <embed src={aws_image_url} width="200" /> </div>)
    } else {
      aws_image_html =
        (<img src={aws_image_url} width="450" />)
    }

  let aws_owners_manual_html
  if (props.possession.aws_owners_manual.url.toLowerCase().endsWith("pdf")) {
    aws_owners_manual_html = 
      (<div> <embed src={aws_owners_manual_url} width="150" /> </div>)
  } else {
    aws_owners_manual_html =
      (<img src={aws_owners_manual_url} width="250" />)
  }

  let aws_purchase_receipt_html
  if (props.possession.aws_purchase_receipt.url.toLowerCase().endsWith("pdf")) {
    aws_purchase_receipt_html = 
      (<div> <embed src={aws_purchase_receipt_url} width="150" /> </div>)
  } else {
    aws_purchase_receipt_html =
      (<img src={aws_purchase_receipt_url} width="250" />)
  }

  let aws_warranty_html
  if (props.possession.aws_warranty.url.toLowerCase().endsWith("pdf")) {
    aws_warranty_html = 
      (<div> <embed src={aws_warranty_url} width="150" /> </div>)
  } else {
    aws_warranty_html =
      (<img src={aws_warranty_url} width="250" />)
  }
  // <img src={aws_image_url} alt="no picture" width="450" />

  return (
    <div className="grid-x grid-padding-x">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />
      <div className="cell">
        <h4>{props.possession.name}</h4>
        <h5>{props.possession.manufacturer} {props.possession.model}</h5>
      </div> 

        <div className="cell small-12 medium-3">
          {aws_image_html}
         </div>

        <div className="cell small-12 medium-6 text-left">
          <h5>{props.possession.description}</h5>
          
          <div className="grid-x grid-margin-x">
          <div className="small-12 medium-6 text-center callout">
              <div>
              <a href={aws_owners_manual_url} target="_blank"> 
                <h5>Owner's Manual</h5>
                <i className={aws_owners_manual_icon}></i>
                {aws_owners_manual_html}
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
            <> 
              <a href={aws_purchase_receipt_url} target="_blank">
                <h5>Purchase Receipt</h5>
                <i className={aws_purchase_receipt_icon}></i>
                {aws_purchase_receipt_html}
              </a>
            </>
          </div>
        </div>


        <div className="grid-x grid-margin-x">
          <div className="small-12 medium-6 text-center callout">
            <>
              <a href={aws_warranty_url} target="_blank">
                <h5>Warranty</h5>
                <i className={aws_warranty_icon}></i>
                {aws_warranty_html}
              </a>
            </>
          </div>
          <div className="small-12 medium-6 text-center callout">
            <>
              <h5>
                <a>
                  {/* placeholder */}
                </a>
              </h5>
            </>
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