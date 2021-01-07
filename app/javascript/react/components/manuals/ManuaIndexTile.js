// ManualIndexTile.js
import React from "react"

const ManualIndexTile = (props) => {
  return (
    <div className="small-12 medium-6 large-3 cell callout hover-zoom box-shadow business-card ">
      <a href={props.data.pdf_url}>
        <h6>{props.data.manual_title}</h6>
      
        <div>
          <embed width="85" height="103" name="plugin" src={props.data.pdf_url} type="application/pdf">
          </embed>
        </div>
      </a>
      <div>
        <i className="far fa-save fa-2x" onClick={() => props.onManualSaveClick(props.data.pdf_url)}></i>
      </div>
    </div>
  )
}

export default ManualIndexTile