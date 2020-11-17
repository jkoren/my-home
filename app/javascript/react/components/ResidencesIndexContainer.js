// ResidencesIndexContainer.js
import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import ResidenceIndexTile from "./ResidenceIndexTile"

const ResidencesIndexContainer = (props) => {
  const [residences, setResidences] = useState([])

  // const [residences, setResidences] = useState({
  //   id: "",
  //   name: "",
  //   street: "",
  //   street2: "",
  //   city: "",
  //   state: "",
  //   image: "",
  // })

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

  let residenceIndexTiles = residences.map((residenceObject) => {
      return <ResidenceIndexTile 
        key={residenceObject.id} 
        data={residenceObject} 
      />
  })


  return (
    <div>
      {residenceIndexTiles}
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          {residenceIndexTiles}
        </div>
      </div>

      <div className="grid-container">
        <Link to={`/residence/new`}>Add a New Residence</Link>
      </div>
    </div>
  )
}

export default ResidencesIndexContainer
