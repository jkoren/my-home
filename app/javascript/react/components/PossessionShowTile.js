import React from "react"

const PossessionShowTile = (props) => {
  // debugger
  return (
    <div className="grid-x grid-padding-x">
      <div className="cell">
        <h4>{props.data.name}</h4>
        <h5>{props.data.manufacturer} {props.data.model}</h5> 
        <img src="https://c.shld.net/rpx/i/s/i/spin/10130653/prod_12126182012" alt="dishwasher" width="150" />
        <h5><a href={props.data.operating_video}>Operating Video</a></h5>     
        {/* <h5>{props.data.image}</h5>   */}
        {/* <a href="https://www.manualslib.com/manual/34146/Cuisinart-Dlc-8s-Series.html">CUISINART DLC-8S SERIES INSTRUCTION AND RECIPE BOOKLET Pdf Download</a> */}
        <h5>Owner's Manual{props.data.owners_manual}</h5>
        <h5>Manufacturer Web Site</h5>
        {/* <h5>Manufacturer Web Site{props.data.URL}</h5> */}
        <h5>Warranty{props.data.purchase_receipt}</h5>
      </div>
    </div>
  )
}

export default PossessionShowTile