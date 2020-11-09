// PossessionNewFormContainer.js
// based on launch-sc-4-react-simple-blog
import React, { useState, useEffect } from "react"

const PossessionNewFormContainer = (props) => {
  debugger
  const [newPossession, setNewPossession] = useState({
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
      ...newPossession,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.addNewPossessionFunction(newPossession)
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
    <form className="callout cell" onSubmit={handleSubmit}>
      <label>
        Possession Name:
        <input
          name="name"
          id="name"
          type="text"
          onChange={handleChange}
          value={newPossession.name}
        />
      </label>
      <label>
        Manufacturer:
        <input
          name="manufacturer"
          id="manufacturer"
          type="text"
          onChange={handleChange}
          value={newPossession.manufacturer}
        />
      </label>

      <div className="button-group">
        <input className="button" type="submit" value="Submit" />
      </div>
    </form>
  )
}

export default PossessionNewFormContainer
