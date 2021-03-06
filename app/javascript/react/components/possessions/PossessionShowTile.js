//PossessionShowTile.js
import React, { useState, useEffect } from "react"
import ProfessionalIndexTile from "../professionals/ProfessionalIndexTile"
import ManualIndexTile from "../manuals/ManuaIndexTile"

const PossessionShowTile = (props) => {
  const [loading, setLoading] = useState(false)

  let loadingGif = loading ? "https://media.tenor.com/images/28357c1fb629177a569732561bfd939c/tenor.gif" : ""

  // to handle cases where there is no aws file, to color font appropriately
  let aws_image_url = (props.possession.aws_image ? props.possession.aws_image.url : nil)
  let aws_owners_manual_url = (props.possession.aws_owners_manual ? props.possession.aws_owners_manual.url : nil)
  let aws_purchase_receipt_url = (props.possession.aws_purchase_receipt ? props.possession.aws_purchase_receipt.url : nil)
  let aws_warranty_url = (props.possession.aws_warranty ? props.possession.aws_warranty.url : nil)
  let aws_tag_url = (props.possession.aws_tag ? props.possession.aws_tag.url : nil)

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

  let aws_tag_icon = (props.possession.tag ? 
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

  // adjusting to show pdfs differently from jpg/png files
  let aws_image_html
  if (props.possession.aws_image != null && props.possession.aws_image.url != null && props.possession.aws_image.url.toLowerCase().endsWith("pdf")) {
    aws_image_html = (<div> <embed src={aws_image_url} width="200" /> </div>)
  } else {
    aws_image_html = (<img src={aws_image_url} width="450" />)
  }

  let aws_owners_manual_html
  if (props.possession.aws_owners_manual != null && props.possession.aws_owners_manual.url != null && props.possession.aws_owners_manual.url.toLowerCase().endsWith("pdf")) {
    aws_owners_manual_html = (<div> <embed src={aws_owners_manual_url} width="150" /> </div>)
  } else {
    aws_owners_manual_html = (<img src={aws_owners_manual_url} width="250" />)
  }

  let aws_purchase_receipt_html
  if (props.possession.aws_purchase_receipt != null && props.possession.aws_purchase_receipt.url != null && props.possession.aws_purchase_receipt.url.toLowerCase().endsWith("pdf")) {
    aws_purchase_receipt_html = (<div> <embed src={aws_purchase_receipt_url} width="150" /> </div>)
  } else {
    aws_purchase_receipt_html = (<img src={aws_purchase_receipt_url} width="250" />)
  }

  let aws_warranty_html
  if (props.possession.aws_warranty != null &&  props.possession.aws_warranty.url != null && props.possession.aws_warranty.url.toLowerCase().endsWith("pdf")) {
    aws_warranty_html = (<div> <embed src={aws_warranty_url} width="150"/> </div>)
  } else {
    aws_warranty_html = (<img src={aws_warranty_url} width="250" />)
  }

  let aws_tag_html
  if (props.possession.aws_tag != null &&  props.possession.aws_tag.url != null && props.possession.aws_tag.url.toLowerCase().endsWith("pdf")) {
    aws_tag_html = (<div> <embed src={aws_tag_url} width="150"/> </div>)
  } else {
    aws_tag_html = (<img src={aws_tag_url} width="250" />)
  }

  // handling case of no links provided for video or manufacturer web site
  let operating_video
  if (props.possession.operating_video != "") { operating_video = props.possession.operating_video } else 
  {
    operating_video = "http://www.google.com" // adjust to what makes sense, a page to suggest saving the URL of a video
  }

  let URL
  if (props.possession.URL != "") { URL = props.possession.URL  } else 
  {
    URL = "http://www.google.com" // adjust to what makes sense, a page to suggest saving the URL of the product/company website
  }

  let professionalsTiles = props.professionals.map((professionalObject) => {
    return <ProfessionalIndexTile
      key={professionalObject.id}
      data={professionalObject}
    />
  })
  let manualsTiles = props.manuals.map(
    (mapobject) => {
      return <ManualIndexTile
      key={mapobject.pdfURL}
      data={mapobject}
      onManualSaveClick={props.onManualSaveClick}
    />
  })

  // don't give option to edit possessions in a demo residence
  let editDeleteTile
  if (!props.possession.demo) {
    // not in a demo residence
    editDeleteTile = (
      <>
        <i className="far fa-edit fa-2x" onClick={props.onEditClickHandler}></i>
        <i className="far fa-trash-alt fa-2x" onClick={props.onDeleteClickHandler}></i>
      </>
    )
  } else {
    // in a demo residence
    editDeleteTile = ""
  }
  
  return (
    <div className="grid-x grid-padding-x">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />
      <div className="cell">
        <h4>{props.possession.name}</h4>
        <h5>{props.possession.manufacturer} {props.possession.model}</h5>
        {editDeleteTile}
        <img src={loadingGif} width="50"></img>
      </div> 

        <div className="cell small-12 medium-3">
          {aws_image_html}
          <i className="fas fa-tools fa-3x"></i>
          Service professionals near you:
          {professionalsTiles} 
         </div>

        <div className="cell small-12 medium-6 text-left">
          <pre>
             {props.possession.description}
          </pre>
          
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
                <a href={URL} target="_blank">
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
                <a href={operating_video} target="_blank">
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
                  {aws_purchase_receipt_html}
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
                {aws_warranty_html}
              </a>
            </div>
          </div>

          <div className="small-12 medium-6 text-center callout">
            <div>
              <a href={aws_tag_url} target="_blank">
                <h5>Model Tag</h5>
                <div>
                  <i className={aws_tag_icon}></i>
                </div>
                {aws_tag_html}
              </a>
            </div>
          </div>

        </div>

      </div> 

      <div className="cell small-12 medium-3">

        <i className="fas fa-book-reader fa-3x"></i>
        Possible Manuals:
        {manualsTiles}

      </div>
    </div>

  )
}

export default PossessionShowTile