// PossessionsNewsContainer.js
import React, { useEffect, useState } from "react"
import PossessionNewsTile from "./PossessionNewsTile"

const PossessionsNewestContainer = (props) => {
  const [possessions, setPossessions] = useState([])

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
        setPossessions(body.possessions)
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`))
  }, [])

  let possessionTiles = possessions.map((possessionObject) => {
      return <PossessionNewsTile 
        key={possessionObject.id} 
        data={possessionObject} 
      />
  })

   return (
    <div>
      <section>
        <h3>Newest Items</h3>
        <table>
          <thead>
            <tr>
              {/* <th width="100">Possession</th> */}
              {/* <th width="100">Location</th> */}
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

export default PossessionsNewestContainer
