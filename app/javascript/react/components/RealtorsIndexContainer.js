// RealtorsIndexContainer.js
import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import RealtorIndexTile from "./RealtorIndexTile"

const RealtorsIndexContainer = (props) => {
  const [realtors, setRealtors] = useState([])

  useEffect(() => {
    fetch(`/api/v1/realtors/`, {
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
        setRealtors(body)
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`))
  }, [])

  let realtorIndexTiles = realtors.map((realtorObject) => {
      return <RealtorIndexTile 
        key={realtorObject.id} 
        data={realtorObject} 
      />
  })

  return (
    <div>
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          {realtorIndexTiles}
        </div>
      </div>

      <div className="grid-container">
        <Link to={`/realtor/new`}>Add a New Realtor</Link>
      </div>
    </div>
  )
}

export default RealtorsIndexContainer
