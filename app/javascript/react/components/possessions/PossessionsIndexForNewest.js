// PossessionsIndexForNewest.js
import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import PossessionNewestTile from "./PossessionNewestTile"

const PossessionsIndexForNewest = (props) => {
  // because this is for a demo, it has a Fetch Get
  debugger
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
        setPossessions(body)
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`))
  }, [])
  let possessionTiles = possessions.map((possessionObject) => {
      return <PossessionNewestTile 
        key={possessionObject.id} 
        data={possessionObject} 
      />
  })
  return (
    <div>
      <div>
         <br></br>{/* spacer */}
      </div>
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          {possessionTiles}
        </div>
      </div>
    </div>
  )
}

export default PossessionsIndexForNewest
