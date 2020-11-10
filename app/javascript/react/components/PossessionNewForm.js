// PossessionNewForm.js
// based on launch-sc-4-react-simple-blog
import React, { useState, useEffect } from "react"

const PossessionNewForm = (props) => {
  const [errors, setErrors] = useState({})
  const [newPossessionObject, setNewPossession] = useState({
    name: "",
    manufacturer: "",
    model: "",
    owner_manual: "",
    description: "",
    year_built: "",
    purchased_from: "",
    image: "",
    purchase_date: "",
    purchase_receipt: "",
    purchase_price: "",
    operating_video: "",
    URL: "",
    warranty: ""
  })

  const handleChange = (event) => {
    setNewPossession({
      ...newPossessionObject,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const addNewPossessionFunction = (newPossessionObject) => {
    event.preventDefault()
    if (validforSubmission(newPossessionObject)) {
      fetch(`/api/v1/rooms/${props.match.params.id}/possessions`, {
        credentials: "same-origin",
        method: "POST",
        body: JSON.stringify(newPossessionObject),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      })
        .then((response) => {
          if (response.ok) {
            return response;
          } else {
            let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
            throw error;
          }
        })
        .then((response) => response.json())
        .then((possession) => {
          if (!possession.errors) {
            setRoom({
              ...room,
              possessions: [possession, ...room.possessions],
            });
          } else if (possession.errors) {
            setErrors(possession.errors);
          }
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`))
    }
  }

  const validforSubmission = (submittedPossession) => {
    let submittedErrors = {}
    const requiredFields = ["name", "manufacturer"]
    requiredFields.forEach(field => {
      if (submittedPossession[field].trim() === "") {
        submittedErrors = {
          ...submittedErrors,
          [field]: "is blank"
        }
      }
    })
    setErrors(submittedErrors)
    return _.isEmpty(submittedErrors)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    addNewPossessionFunction(newPossessionObject)
    setNewPossession({
      name: "",
      manufacturer: "",
      model: "",
      owner_manual: "",
      description: "",
      year_built: "",
      purchased_from: "",
      image: "",
      purchase_date: "",
      purchase_receipt: "",
      purchase_price: "",
      operating_video: "",
      URL: "",
      warranty: ""
    })
  }
  return (
    // <div className=" small-offset-1 ">
      <div className="small-12 medium-8 medium-offset-1 medium-right-offset-1 small-centered">

          <form className="callout cell " onSubmit={handleSubmit}>
    
            <label>
              Possession Name:
                  <input
                name="name"
                id="name"
                type="text"
                onChange={handleChange}
                value={newPossessionObject.name}
              />
            </label>
    
            <label>
              Manufacturer:
                  <input
                name="manufacturer"
                id="manufacturer"
                type="text"
                onChange={handleChange}
                value={newPossessionObject.manufacturer}
              />
            </label>
    
            <label>
              Model:
                  <input
                name="model"
                id="model"
                type="text"
                onChange={handleChange}
                value={newPossessionObject.model}
              />
            </label>
    
            <label>
              Owner's Manual:
                  <input
                name="owner_manual"
                id="owner_manual"
                type="text"
                onChange={handleChange}
                value={newPossessionObject.owner_manual}
              />
            </label>
    
            <label>
              Description of this possession:
                  <input
                name="description"
                id="description"
                type="text"
                onChange={handleChange}
                value={newPossessionObject.description}
              />
            </label>
    
            <label>
              Image:
                  <input
                name="image"
                id="image"
                type="text"
                onChange={handleChange}
                value={newPossessionObject.image}
              />
            </label>
    
            <div className="button-group">
              <input className="button" type="submit" value="Submit" />
            </div>
          </form>
        </div>
      // </div>
  )
}

export default PossessionNewForm
