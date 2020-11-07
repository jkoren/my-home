import React from "react"
import { Link } from "react-router-dom";

const PossessionIndexTile = (props) => {
  return (
    <div className="callout cell small-12 medium-3 hover-zoom box-shadow">
      <Link to={`/possessions/${props.data.id}`}>
        <h4>{props.data.name}</h4>
        <h5>{props.data.manufacturer} {props.data.model}</h5> 
        <div className="text-center">
          <img src="https://c.shld.net/rpx/i/s/i/spin/10130653/prod_12126182012" alt="dishwasher" width="150" />
        </div>

        {/* <h5>{props.data.image}</h5>   */}
      </Link>
    </div>
  )
}

export default PossessionIndexTile