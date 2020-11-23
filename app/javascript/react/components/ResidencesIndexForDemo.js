// ResidencesIndexForDemo.js
import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import ResidenceIndexTile from "./ResidenceIndexTile"

const ResidencesIndexForDemo = (props) => {
  // because this is for a demo, it has a Fetch Get
  const [residences, setResidences] = useState([])

  useEffect(() => {
    fetch(`/api/v1/residences/`, {
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
        setResidences(body)
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`))
  }, [])
  let residenceTiles = residences.map((residenceObject) => {
      return <ResidenceIndexTile 
        key={residenceObject.id} 
        data={residenceObject} 
      />
  })
  return (
    <div>
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          {residenceTiles}
        </div>
      </div>

      {/* problem here is getting the ID of the realtor - its not in props
      <div className="grid-container">
        <Link to={`/realtors/${props.realtor.id}/residences/new`}>Add a New Residence for this Realtor</Link>
      </div> */}


      {/* <div className="grid-container">
        <Link to={`/realtor/new`}>Change The Information For This Realtor</Link>
      </div>

      <div className="grid-container">
        <Link to={`/realtor/new`}>Delete This Realtor</Link>
      </div> */}

    </div>
  )
}

export default ResidencesIndexForDemo
