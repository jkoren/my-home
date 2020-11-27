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
      <div>
         <br></br>{/* spacer */}
      </div>
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          {residenceTiles}
        </div>
      </div>

      {/* when entering here, assume there is no realtor */}
      {/* realtor_id is ignored by controller, all houses are assigned to "no realtor" record, so value here is dummy */}
      <div className="grid-container">
        <Link to={`/realtors/0/residences/new`}>Add a New Residence</Link>
      </div>


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
