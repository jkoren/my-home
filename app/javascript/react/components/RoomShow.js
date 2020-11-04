import React from "react"

const RoomShow = (props) => {
  // let poster
  // if(props.room_poster){
  //   if(props.room_poster.url !== null){
  //     poster = <img className="padded" src={props.room_poster.url} alt="room poster" />
  //   }
  // }
  return(
      <div className="grid-container">
        <div className="cell small-12 medium-4">
              <h3 className="field">{props.name}</h3>
              <h4 className="field">{props.description} </h4>
              {/* <div className="small-6 columns">
              {poster}
            </div>  */}
        </div>
      </div>
  )
}
export default RoomShow