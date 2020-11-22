// RoomNewForm.js
import React, { useState } from 'react'
import Dropzone from 'react-dropzone'
import { Redirect } from 'react-router-dom'
import _ from 'lodash'
import ErrorList from './ErrorList'

const RoomNewForm = (props) => {
  const [formFields, setFormFields] = useState({
    name: "",
    description: "",
    image: "",
    owner_manual: "",
    description: "",
    year_built: "",
    purchased_from: "",
    image: "",
    aws_image: "",
    purchase_date: "",
    purchase_receipt: "",
    purchase_price: "",
    operating_video: "",
    URL: "",
    warranty: ""
  })
  let imageUploaded = null;
  let ownerManualUploaded = null;
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
    const requiredFields = ["name", "description"]
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
      let newRoom = new FormData()
      newRoom.append("name", formFields.name)
      newRoom.append("description", formFields.description)
      newRoom.append("image", formFields.image)
      newRoom.append("owners_manual", formFields.owners_manual)
      newRoom.append("description", formFields.description)
      newRoom.append("year_built", formFields.year_built)
      newRoom.append("purchased_from", formFields.purchased_from)
    
      newRoom.append("image", formFields.image)
      newRoom.append("aws_image", formFields.aws_image)
    
      newRoom.append("purchase_date", formFields.purchase_date)
      newRoom.append("purchase_price", formFields.purchase_price)
      newRoom.append("operating_video", formFields.operating_video)
      newRoom.append("URL", formFields.URL)
      newRoom.append("warranty", formFields.warranty)

      fetch(`/api/v1/residences/${props.match.params.id}/rooms`, {
        method: "POST",
        body: newRoom,
        credentials: "same-origin",
        headers: {
          Accept: 'application/json',
          Accept: "image/jpeg",
        },
      })
        .then(response => response.json())
        .then(json_response => {
          if (json_response.errors) {
            const requiredFields = ["name", "description"]
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
    return <Redirect to={`/residences/${props.match.params.id}`}/>
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
              Room Name:
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
                name="description"
                id="description"
                type="text"
                onChange={handleChange}
                value={formFields.description}
              />
            </label>

            <label>
              Model:
              <input
                name="image"
                id="image"
                type="text"
                onChange={handleChange}
                value={formFields.image}
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

export default RoomNewForm
