// PossessionNewForm.js
// based on launch-sc-4-react-simple-blog
import React, { useState, useEffect } from "react"

const PossessionNewForm = (props) => {
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
    
            <label>
              Model:
                  <input
                name="model"
                id="model"
                type="text"
                onChange={handleChange}
                value={newPossession.model}
              />
            </label>
    
            <label>
              Owner's Manual:
                  <input
                name="owner_manual"
                id="owner_manual"
                type="text"
                onChange={handleChange}
                value={newPossession.owner_manual}
              />
            </label>
    
            <label>
              Description:
                  <input
                name="description"
                id="description"
                type="text"
                onChange={handleChange}
                value={newPossession.description}
              />
            </label>
    
            <label>
              Image:
                  <input
                name="image"
                id="image"
                type="text"
                onChange={handleChange}
                value={newPossession.image}
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
