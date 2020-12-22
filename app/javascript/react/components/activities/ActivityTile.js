// PossessionNewsTile.js
import React from "react"
import { Link } from "react-router-dom";

const ActivityTile = (props) => {
  return (
      <tr>
        <td>{props.data.email}</td>
        <td>{props.data.action}</td>
        <td>{props.data.table}</td>
        <td>{props.data.name}</td>
      </tr> 
  )
}

export default ActivityTile