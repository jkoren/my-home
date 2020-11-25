// PossessionNewForm.js
import React, { useState } from 'react'
import Dropzone from 'react-dropzone'
import { Redirect } from 'react-router-dom'
import _ from 'lodash'
import ErrorList from './ErrorList'

const PossessionNewForm = (props) => {
  const [formFields, setFormFields] = useState({
    name: "",
    manufacturer: "",
    model: "",
    owner_manual: "",
    description: "",
    year_built: "",
    purchased_from: "",
    // image: "",
    aws_image: "",
    purchase_date: "",
    purchase_receipt: "",
    purchase_price: "",
    operating_video: "",
    URL: "",
    warranty: ""
  })
  let imageUploaded = null;
  const [errors, setErrors] = useState({})
  const [error, setError] = useState(null)


  const [shouldRedirect, setShouldRedirect] = useState({
    redirect: false,
    id: ""
  })
  
  const handleChange = (event) => {
    setFormFields({
      ...formFields,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleFileUpload = (acceptedFiles) => {
    setFormFields({
      ...formFields,
      aws_image: acceptedFiles[0]
    })
  }

  const validforSubmission = () => {
    let submittedErrors = {}
    const requiredFields = ["name", "manufacturer"]
    requiredFields.forEach(field => {
      if (formFields[field].trim() === "") {
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
    if (validforSubmission(formFields)) {
      event.preventDefault()
      // debugger
      let newPossession = new FormData()
      newPossession.append("name", formFields.name)
      newPossession.append("manufacturer", formFields.manufacturer)
      newPossession.append("model", formFields.model)
      newPossession.append("owners_manual", formFields.owners_manual)
      newPossession.append("description", formFields.description)
      newPossession.append("year_built", formFields.year_built)
      newPossession.append("purchased_from", formFields.purchased_from)
    
      // newPossession.append("image", formFields.image)
      newPossession.append("aws_image", formFields.aws_image.url)
    
      newPossession.append("purchase_date", formFields.purchase_date)
      newPossession.append("purchase_price", formFields.purchase_price)
      newPossession.append("operating_video", formFields.operating_video)
      newPossession.append("URL", formFields.URL)
      newPossession.append("warranty", formFields.warranty)
      fetch(`/api/v1/rooms/${props.match.params.id}/possessions`, {
        credentials: "same-origin",
        method: "POST",
        body: newPossession,
        headers: {
          Accept: 'application/json',
          Accept: "image/jpeg",
        },
      })
        .then(response => response.json())
        .then(json_response => {
          if (json_response.errors) {
            const requiredFields = ["name", "manufacturer"]
            requiredFields.forEach(field => {
              if (json_response.errors[field] !== undefined) {
                setErrors({
                  ...errors,
                  [field]: json_response.errors[field][0]
                })
              }
            })
          } else if (json_response.error) {
            setError(json_response.error)
          } else {
            setShouldRedirect({
              redirect: true,
              id: json_response.id
            })
          }
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`))
    }
  }

  if (shouldRedirect.redirect) {
    return <Redirect to={`/rooms/${props.match.params.id}`}/>
  }

  if (formFields.aws_image != "") {
    imageUploaded = (
      <div className="grid-x align-center text-center">
        <h5 className="cell shrink">Image Uploaded: {formFields.aws_image.path}</h5>
      </div>
    );
  }

  if (formFields.owner_manual != "") {
    ownerManualUploaded = (
      <div className="grid-x align-center text-center">
        <h5 className="cell shrink">Owner's Manual Uploaded: {formFields.owner_manual.path}</h5>
      </div>
    );
  }
  return (
    
    <div className="cell grid-x grid-padding-x">

      <div className="cell small-12 medium-2"> </div>
      <div className="cell small-12 medium-8">
        
        <div className="field">
          <form onSubmit={handleSubmit}>
            <ErrorList errors={errors}
              error={error} />

            <label>
              Possession Name:
              <input
                name="name"
                id="name"
                type="text"
                onChange={handleChange}
                value={formFields.name}
              />
            </label>


            <label>
              Manufacturer:
              <input
                name="manufacturer"
                id="manufacturer"
                type="text"
                onChange={handleChange}
                value={formFields.manufacturer}
              />
            </label>

            <label>
              Model:
              <input
                name="model"
                id="model"
                type="text"
                onChange={handleChange}
                value={formFields.model}
              />
            </label>

            <label>
              Owner's Manual:
              <input
                name="owner_manual"
                id="owner_manual"
                type="text"
                onChange={handleChange}
                value={formFields.owner_manual}
              />
            </label>

            <label>
              Description of this possession:
              <input
                name="description"
                id="description"
                type="text"
                onChange={handleChange}
                value={formFields.description}
              />
            </label>

            <Dropzone onDrop={handleFileUpload}>
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()}>
                  <input {...getInputProps()} />

                  <div className="cell  grid-x ">
                    <div className="cell callout">
                      <div>
                        <i className="fas fa-image fa-3x"> </i>
                        Drag a product image here, or click to upload one from your computer
                      </div>
                    </div>
                  </div>
                </div>
         
              )}
            </Dropzone>
            {imageUploaded}

            <div className="">
              <input className="" type="submit" value="Submit" />
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default PossessionNewForm
