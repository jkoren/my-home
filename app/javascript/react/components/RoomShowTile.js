import React from "react"

const RoomShowTile = (props) => {
  return(
    <div>
      <div className="grid-x grid-padding-x">
        <div className="small-12 medium-2 cell">
          <h4 className="field">{props.name}</h4>
        </div>
        <div className="small-8 medium-10 cell"> 
          <h5 className="field">{props.description} </h5>
        </div>
      </div>
    </div>
  )
}
export default RoomShowTile