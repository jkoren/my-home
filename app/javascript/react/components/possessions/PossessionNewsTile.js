// PossessionNewsTile.js
import React from "react"

const PossessionNewsTile = (props) => {

  return (
      <tr>
        <td>{props.data.name} {props.data.manufacturer} {props.data.model}</td>
        <td>{props.data.display_location}</td>
      </tr> 
  )
}

export default PossessionNewsTile