// RealtorPage.js
import React, { useState, useEffect } from "react"
import RealtorShowTile from "./RealtorShowTile"
import ResidencesIndexContainer from "./ResidencesIndexContainer"
import _ from "lodash"

const RealtorPage = (props) => {
  const [realtor, setRealtor] = useState({
    id: "",
    name: "",
    company: "",
    image: "",
    aws_image: {},
    phone_number: "",
    email: "",
    URL: "",
    residences: []
  })

  const id = props.match.params.id 

  useEffect(() => {
    fetch(`/api/v1/realtors/${id}`, {
      credentials: "same-origin"
    })
      .then((response) => {
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

export default RealtorPage 