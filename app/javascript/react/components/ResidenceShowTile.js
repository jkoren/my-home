import React from "react"

const ResidenceShowTile = (props) => {
  return (
    <div className="grid-x grid-padding-x">
      
      <div className="medium-4">
      </div>

      <div className="cell callout small-12 medium-4 box-shadow">
        <div>
          <img src={props.data.aws_image.url} alt="missing aws picture" width="350" />
        </div>
        <div className="cell">
          <h4>{props.data.street} {props.data.city}, {props.data.state}</h4> 
        </div>
      </div>
      
    </div>
  )
}

export default ResidenceShowTile