// RealtorsIndexForDemo.js
import React, { useEffect, useState } from "react"
import RealtorIndexTile from "./RealtorIndexTile"

const RealtorsIndexForDemo = () => {
  // because this is for a demo, it has a Fetch Get
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

  let realtorTiles = realtors.map((realtorObject) => {
      return <RealtorIndexTile 
        key={realtorObject.id} 
        data={realtorObject} 
      />
  })

  return (
    <div>
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          {realtorTiles}
        </div>
      </div>


    </div>
  )
}

export default RealtorsIndexForDemo
