//RealtorShowTile.js
import React from "react"

const RealtorShowTile = (props) => {
  return (
    <div className="grid-x grid-padding-x">
      <div className="cell ">
        <h4>{props.realtor.name}</h4>
        <h5>{props.realtor.company}</h5>
        <h5>{props.realtor.email}</h5>
        <h5>{props.realtor.phone_number}</h5>
        <h5>{props.realtor.URL}</h5>
        <img src={props.realtor.aws_image.url} alt="missing aws picture" width="250" />
      </div>
    </div> 

  )
}

export default RealtorShowTile