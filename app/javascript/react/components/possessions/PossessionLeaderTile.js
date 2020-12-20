// PossessionLeaderTile.js
import React from "react"
import { Link } from "react-router-dom";

const PossessionLeaderTile = (props) => {
  return (
      <tr>
        <td>{props.data[0]}</td>
        <td>{props.data[1]}</td>
        {/* <td>0</td> */}
      </tr>
  )
}

export default PossessionLeaderTile