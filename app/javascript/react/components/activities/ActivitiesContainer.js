// ActivitiesContainer.js
import React, { useEffect, useState } from "react"
import ActivityTile from "./ActivityTile"

const ActivitiesContainer = (props) => {
  const [activities, setActivities] = useState([])

  useEffect(() => {
    fetch(`/api/v1/activities/`, {
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
        setActivities(body)
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`))
  }, [])

  let ActivityTiles = activities.map((ActivityObject) => {
      return <ActivityTile 
        key={ActivityObject.id} 
        data={ActivityObject} 
      />
  })

   return (
    <div>
      <section>
        <h3>Activities</h3>
        <table>
          <thead>
            <tr>
              <th width="100">Email</th>
              <th width="100">Action</th>
              <th width="100">Table</th>
              <th width="100">Name</th>
              {/* <th width="100">Points</th> */}
            </tr>
          </thead>
          <tbody>
            {ActivityTiles}
          </tbody>
        </table>
      </section>

    </div>
  )
}

export default ActivitiesContainer
