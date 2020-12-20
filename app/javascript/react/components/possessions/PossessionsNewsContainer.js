// PossessionsNewsContainer.js
import React, { useEffect, useState } from "react"
import PossessionNewsTile from "./PossessionNewsTile"
import PossessionLeaderTile from "./PossessionLeaderTile"
// import PossessionLeaderBoard from "./PossessionLeaderBoard"

const PossessionsNewsContainer = (props) => {
  const [possessions, setPossessions] = useState([])
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
        console.log(body.possessions)
        console.log(body.leaders)
        setPossessions(body.possessions)
        setLeaders(body.leaders)
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`))
  }, [])
  // let possessionLeaderBoard = <PossessionLeaderBoard
  // />

  let possessionTiles = possessions.map((possessionObject) => {
      return <PossessionNewsTile 
        key={possessionObject.id} 
        data={possessionObject} 
      />
  })

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
              {/* <th width="100">Points</th> */}
            </tr>
          </thead>
          <tbody>
            {leaderTiles}
          </tbody>
        </table>
      </section>

      <section>
        <h3>Newest Items Added</h3>
        <table>
          <thead>
            <tr>
              <th width="100">Possession</th>
              <th width="100">Location</th>
            </tr>
          </thead>
          <tbody>
            {possessionTiles}
          </tbody>
        </table>
      </section>

    </div>
  )
}

export default PossessionsNewsContainer
