// ManualIndexTile.js
import React from "react"

const ManualIndexTile = (props) => {
  return (
    <a href={props.data.pdfURL}>
      <div className="small-12 medium-6 large-3 cell callout hover-zoom box-shadow business-card ">

          <h6>{props.data.manual_title}</h6>
          <div>
            <embed width="85" height="103" name="plugin" src={props.data.pdfURL} type="application/pdf">
            </embed>
          </div>
          <div>
            <i className="far fa-save fa-2x"></i>
          </div>
          
      </div>
    </a>
  )
}

export default ManualIndexTile