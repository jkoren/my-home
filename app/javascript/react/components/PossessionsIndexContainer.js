// PossessionsIndexContainer.js
import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import PossessionIndexTile from "./PossessionIndexTile"

const PossessionsIndexContainer = (props) => {
  // const [possessions, setPossessions] = useState([])
  
  // useEffect(() => {
  //   fetch(`/api/v1/rooms/${id}/possessions.json`, {
  //     credentials: "same-origin"
  //   })
  //   .then(response => {
  //     if (response.ok) {
  //       return response
  //     } else {
  //       let errorMessage = `${response.status} (${response.statusText})`,
  //       error = new Error(errorMessage)
  //       throw error
  //     }
  //   })
  //   .then(response => response.json())
  //   .then(body => {
  //     setPossessions(body)
  //   })
  //   .catch(error => console.error(`Error in fetch: ${error.message}`))
  // }, [])
  // let possessionList = possessions.map((possessionObject) => {
  //   return <PossessionIndexTile key={possessionObject.id} data={possessionObject} />
  // })
  let possessionList
  if (!_.isEmpty(props.possessions)) {
    possessionList = props.possessions.map((possessionObject) => {
      return <PossessionIndexTile key={possessionObject.id} data={possessionObject} />
    }
  )}

  // debugger
  return (
    <div>

      {/* <div className="text-center">
        <h4>Kitchen</h4>
      </div> */}


      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          {possessionList}
        </div>
      </div>

      <div className="grid-container">
        <Link to={`/possession/new`}>Add a New Possession </Link>
      </div>

    </div>
  )
}

export default PossessionsIndexContainer
