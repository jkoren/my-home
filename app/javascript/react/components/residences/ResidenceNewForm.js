// ResidenceNewForm.js
import React, { useState } from 'react'
import Dropzone from 'react-dropzone'
import { Redirect } from 'react-router-dom'
import _ from 'lodash'
import ErrorList from '../ErrorList'

const ResidenceNewForm = (props) => {
  const [formFields, setFormFields] = useState({
    name: "",
    street: "",
    street2: "",
    city: "",
    state: "",
    zip_code: "",
    aws_image: {},
    rooms: [],
    note: ""
  })
  const [errors, setErrors] = useState({})
  const [error, setError] = useState(null)
  const [shouldRedirect, setShouldRedirect] = useState({
    redirect: false,
    id: ""
  })
  
  let imageUploaded = null;
  
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
    const requiredFields = ["name"]
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
      let newResidence = new FormData()
      newResidence.append("name", formFields.name)
      newResidence.append("street", formFields.street) 
      newResidence.append("street2", formFields.street2)
      newResidence.append("city", formFields.city)
      newResidence.append("state", formFields.state)
      newResidence.append("zip_code", formFields.zip_code)
      newResidence.append("aws_image", formFields.aws_image)
      newResidence.append("note", formFields.note)

      fetch(`/api/v1/residences`, {
        method: "POST",
        body: newResidence,
        credentials: "same-origin",
        headers: {
          Accept: 'application/json',
          Accept: "image/jpeg"
        },
      })
        .then(response => response.json())
        .then(json_response => {
          if (json_response.errors) {
            const requiredFields = ["name"]
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
    return <Redirect to={`/residences`}/>
  }

  if (formFields.aws_image != "") {
    imageUploaded = (
      <div className="grid-x align-center text-center">
        <h5 className="cell shrink">Image Uploaded: {formFields.aws_image.path}</h5>
      </div>
    );
  }
  
  if (_.isEmpty(formFields.aws_image)
) {
    imageUploaded = (
      <div className="grid-x align-center text-center">
        <h5 className="cell shrink">Image Uploaded: {formFields.aws_image.path}</h5>
      </div>
    );
  }

  return (
    
    <div className="cell grid-x grid-padding-x">

      <div className="cell small-12 medium-2">
        {/* spacer */}
      </div>

      <div className="cell small-12 medium-8">
        
        <div className="field">
          <form onSubmit={handleSubmit}>

            <ErrorList errors={errors}
              error={error} />

            <label>
              * Residence Name:
              <input
                name="name"
                id="name"
                type="text"
                onChange={handleChange}
                value={formFields.name}
              />
            </label>
            <label>
              Address is not required.  Zip Code will help find service professionals near you.
            </label>

            <label>
              Zip Code:
              <input
                name="zip_code"
                id="zip_code"
                type="text"
                onChange={handleChange}
                value={formFields.zip_code}
              />
            </label>

            <label>
              Street:
              <input
                name="street"
                id="street"
                type="text"
                onChange={handleChange}
                value={formFields.street}
              />
            </label>

            <label>
              Street 2:
              <input
                name="street2"
                id="street2"
                type="text"
                onChange={handleChange}
                value={formFields.street2}
              />
            </label>

            <label>
              City:
              <input
                name="city"
                id="city"
                type="text"
                onChange={handleChange}
                value={formFields.city}
              />
            </label>

            <label>
              State:
              <input
                name="state"
                id="state"
                type="text"
                onChange={handleChange}
                value={formFields.state}
              />
            </label>

            <label>
              Note about this residence:
              <textarea
                name="note"
                rows="4"
                onChange={handleChange}
                value={formFields.note}
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
                        Drag a residence image here, or click to upload one from your computer or mobile device
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

export default ResidenceNewForm
