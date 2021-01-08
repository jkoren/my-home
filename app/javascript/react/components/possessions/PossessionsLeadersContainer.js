// PossessionsLeadersContainer.js
import React, { useEffect, useState } from "react"
import PossessionLeaderTile from "./PossessionLeaderTile"

const PossessionsLeadersContainer = (props) => {
  const [leaders, setLeaders] = useState([])

  useEffect(() => {
    fetch(`/api/v1/possessions/`, {
      credentials: "same-origin"
    })
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw (error);
        }
      })
      .then(response => response.json())
      .then((body) => {
        setLeaders(body.leaders)
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`))
  }, [])

  let leaderTiles = leaders.map((possessionArray) => {
      return <PossessionLeaderTile 
        key={possessionArray[0]} 
        data={possessionArray} 
      />
  })
   return (
    <div>
      <section>
        <h3>Possession Leader Board</h3>
        <table>
          <thead>
            <tr>
              <th width="100">Screen Name</th>
              <th width="100">Possessions</th>
            </tr>
          </thead>
          <tbody>
            {leaderTiles}
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default PossessionsLeadersContainer
