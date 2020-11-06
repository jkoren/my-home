import React from "react"

const PossessionIndexTile = (props) => {
  // debugger
  return (
    <div className="callout cell small-12 medium-3 hover-zoom box-shadow">
      {/* <Link to={`/rooms/${props.data.id}`}> */}
          <h4>{props.data.name}</h4>
          <h5>{props.data.manufacturer} {props.data.model}</h5> 
          {/* <h5>{props.data.image}</h5>   */}
      {/* </Link> */}
    </div>
  )
}

export default PossessionIndexTile