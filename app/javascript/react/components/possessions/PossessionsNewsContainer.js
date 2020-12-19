// PossessionsNewsContainer.js
import React, { useEffect, useState } from "react"
import PossessionNewsTile from "./PossessionNewsTile"
import PossessionLeaderBoard from "./PossessionLeaderBoard"

const PossessionsNewsContainer = (props) => {
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
  let possessionLeaderBoard = <PossessionLeaderBoard
  />

  let possessionTiles = possessions.map((possessionObject) => {
      return <PossessionNewsTile 
        key={possessionObject.id} 
        data={possessionObject} 
      />
  })
   return (
    <div>
      
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          {possessionLeaderBoard}
        </div>
      </div>

       <section>
         <h3>Newest Items Added</h3>
         <table>
           <thead>
             <tr>
               <th width="100">Possession</th>
               <th width="100">Location</th>
               <th width="100">Screen Name</th>
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
