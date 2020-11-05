import React from "react"
import { Link } from 'react-router-dom'

const RoomShowTile = (props) => {
  return(
    <div>
      <Link to={`/rooms/${props.id}`}>

        <div className="grid-x grid-padding-x">
          <div className="small-12 medium-2 cell">
            <h4 className="field">{props.name}</h4>
          </div>
         
          <div className="small-8 medium-10 cell"> 
            <h5 className="field">{props.description} </h5>
          </div>

          {/* <img src="https://secure.img1-fg.wfcdn.com/im/49278377/resize-h600%5Ecompr-r85/5706/57068565/Portland+4+-+Light+Kitchen+Island+Linear+Pendant.jpg" alt="room image" width="150" /> */}

        </div>
      </Link>
    </div>
  )
}

{/* <div className="callout cell small-12 medium-4 box-shadow hover-zoom">
  <Link to={`/rooms/${room.id}`}>
    <h3>{room.name}</h3>
    <p>{room.description}</p>
    <div className="text-center">
      <img src="https://secure.img1-fg.wfcdn.com/im/49278377/resize-h600%5Ecompr-r85/5706/57068565/Portland+4+-+Light+Kitchen+Island+Linear+Pendant.jpg" alt="room image" width="150" />
    </div>
  </Link>
</div> */}
export default RoomShowTile