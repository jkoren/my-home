// RealtorShowContainer.js
import React, { useState, useEffect } from "react"
import RealtorShowTile from "./RealtorShowTile"
import ResidencesIndexContainer from "./ResidencesIndexContainer"
import _ from "lodash"

const RealtorShowContainer = () => {
  // debugger
  const [realtor, setRealtor] = useState({
    id: "",
    name: "",
    company: "",
    image: "",
    aws_image: "",
    phone_number: "",
    email: "",
    URL: ""
  })

  const id = "4" // for demo purposes

  useEffect(() => {
    debugger // never getting hit - no data from backend
    fetch(`/api/v1/realtors/${id}`, {
      credentials: "same-origin"
    })
      .then((response) => {q
        debugger // never getting hit
        if (response.ok) {
          return response.json();
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw (error);
        }
      })
      .then((responseBody) => {
        setRealtor(responseBody)
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`))
  }, [])

  
  let realtorShow
  if (!_.isEmpty(realtor)) {
  // if (!realtor.id=="") {
    realtorShow = <RealtorShowTile
    key={realtor.id}
    realtor={realtor}
    />
   }

  return (
    <div>
      <div className="text-center">
        {realtorShow}
      </div>

      <ResidencesIndexContainer
        realtor={realtor}
        residences={realtor.residences}
      />
    </div>
  )
}

export default RealtorShowContainer 