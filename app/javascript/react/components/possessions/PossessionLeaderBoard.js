// PossessionLeaderBoard.js
import React from "react"
import { Link } from "react-router-dom";

const PossessionLeaderBoard = (props) => {
  // https://codepen.io/nikhil8krishnan/full/WvYPvv/
  return (
    <section>
      <h3>Possession Leader Board</h3>
      <table>
        <thead>
          <tr>
            <th width="100">Screen Name</th>
            <th width="100">Possessions</th>
            <th width="100">Points</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>JDK</td>
            <td>6</td>
            <td>15</td>
          </tr>
          <tr>
            <td>SML</td>
            <td>3</td>
            <td>2</td>
          </tr>
          <tr>
            <td>NCK</td>
            <td>1</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default PossessionLeaderBoard

