// PossessionsIndexPage.js
import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import PossessionTile from "./PossessionTile"

const PossessionsIndexPage = (props) => {
  const [possessions, setPossessions] = useState([])
  
  useEffect(() => {
    fetch(`/api/v1/rooms/${id}/possessions.json`, {
      credentials: "same-origin"
    })
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage)
        throw error
      }
    })
    .then(response => response.json())
    .then(body => {
      setPossessions(body)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])
  let possessionList = possessions.map((possessionObject) => {
    return <PossessionTile key={possessionObject.id} data={possessionObject} />
  })

  return (
    <div>

      {/* <div className="text-center">
        <h4>Kitchen</h4>
      </div> */}


      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          <div className="callout cell small-12 box-shadow">
            {possessionList}
          </div>
        </div>
      </div>

      <div className="grid-container">
        <Link to={`/possession/new`}>Add a New Possession </Link>
      </div>

    </div>
  )
}

export default PossessionsIndexPage
