// ResidenceShowContainer.js
import React, { useState, useEffect } from "react"
import ResidenceShowTile from "./ResidenceShowTile"

import _ from "lodash" 
// import ResidenceErrorList from "./ResidenceErrorList"
// import ResidenceForm from "./ResidenceForm"

const ResidenceShowContainer = (props) => {
  const [residence, setResidence] = useState({
    id: "",
    name: "",
    manufacturer: "",
    model: "",
    operating_video: "",
    image: "",
    aws_image: "",
    owners_manual: "",
    URL: "",
    purchase_receipt: ""
  })
  
  // const [errors, setErrors] = useState({})
  // const [error, setError] = useState(null)

  const id = props.match.params.id 
  useEffect(() => {
    fetch(`/api/v1/residences/${id}`, {
      credentials: "same-origin"
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
          throw(error);
        }
      })
      .then((responseBody) => {
        setResidence(responseBody)
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`))
  }, [])
  let residenceShow
  if (!_.isEmpty(residence)) {
    residenceShow = <ResidenceShowTile
      key={residence.id}
      data={residence}
    />
  }

  return (
    <div>
      <div className="text-center">
        {residenceShow}
      </div>
    </div>
  )
}

export default ResidenceShowContainer 