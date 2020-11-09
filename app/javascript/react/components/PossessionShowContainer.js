// PossessionShowContainer.js
import React, { useState, useEffect } from "react"
import PossessionShowTile from "./PossessionShowTile"

import _ from "lodash" 
// import PossessionErrorList from "./PossessionErrorList"
// import PossessionForm from "./PossessionForm"

const PossessionShowContainer = (props) => {
  const [possession, setPossession] = useState({
    id: "",
    name: "",
    manufacturer: "",
    model: "",
    operating_video: "",
    image: "",
    owners_manual: "",
    URL: "",
    purchase_receipt: ""
  })
  // const [errors, setErrors] = useState({})
  // const [error, setError] = useState(null)

  const id = props.match.params.id 
  useEffect(() => {
    fetch(`/api/v1/possessions/${id}`, {
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
        setPossession(responseBody)
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`))
    }, [])
  let possessionShow
  if (!_.isEmpty(possession)) {
    possessionShow = <PossessionShowTile
      key={possession.id}
      data={possession}
    />
  }

  return (
    <div>
      <div className="text-center">
        {possessionShow}
      </div>
    </div>
  )
}

export default PossessionShowContainer 