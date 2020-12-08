// PossessionNewForm.js
import React, { useState } from 'react'
import Dropzone from 'react-dropzone'
import { Redirect } from 'react-router-dom'
import _ from 'lodash'
import ErrorList from '../ErrorList'

const PossessionNewForm = (props) => {
  const [formFields, setFormFields] = useState({
    name: "",
    manufacturer: "",
    model: "",
    description: "",
    year_built: "",
    purchased_from: "",
    aws_image: {},
    aws_owners_manual: {},
    aws_purchase_receipt: {},
    aws_warranty: {},
    purchase_date: "",
    purchase_price: "",
    operating_video: "",
    URL: "",
  })
  let imageUploaded = null;
  let owners_manualUploaded = null;
  let warrantyUploaded = null;
  let purchaseReceiptUploaded = null;
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

  const handleAWS_image_upload = (acceptedFiles) => {
    setFormFields({
      ...formFields,
      aws_image: acceptedFiles[0]
    })
  }

  const handleAWS_owners_manual_upload = (acceptedFiles) => {
    setFormFields({
      ...formFields,
      aws_owners_manual: acceptedFiles[0]
    })
  }

  const handleAWS_warranty_upload = (acceptedFiles) => {
    setFormFields({
      ...formFields,
      aws_warranty: acceptedFiles[0]
    })
  }

  const handleAWS_purchase_receipt = (acceptedFiles) => {
    setFormFields({
      ...formFields,
      aws_purchase_receipt: acceptedFiles[0]
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
      let newPossession = new FormData()
      newPossession.append("name", formFields.name)
      newPossession.append("manufacturer", formFields.manufacturer)
      newPossession.append("model", formFields.model)
      newPossession.append("description", formFields.description)
      newPossession.append("aws_image", formFields.aws_image)
      newPossession.append("aws_owners_manual", formFields.aws_owners_manual)
      newPossession.append("aws_purchase_receipt", formFields.aws_purchase_receipt)
      newPossession.append("aws_warranty", formFields.aws_warranty)
      newPossession.append("operating_video", formFields.operating_video)
      newPossession.append("URL", formFields.URL)
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
    return <Redirect to={`/rooms/${props.match.params.id}`} />
  }

  if (!_.isEmpty(formFields.aws_image)) {
    imageUploaded = (
      <div className="grid-x align-center text-center">
        <h5 className="cell shrink">Image Uploaded: {formFields.aws_image.path}</h5>
      </div>
    );
  }

  if (!_.isEmpty(formFields.aws_owners_manual)) {
    owners_manualUploaded = (
      <div className="grid-x align-center text-center">
        <h5 className="cell shrink">Owner's Manual Uploaded:
       {formFields.aws_owners_manual.path}
        </h5>
      </div>
    );
  }

  if (!_.isEmpty(formFields.aws_warranty)) {
    warrantyUploaded = (
      <div className="grid-x align-center text-center">
        <h5 className="cell shrink">Warranty Uploaded:
       {formFields.aws_warranty.path}
        </h5>
      </div>
    );
  }

  if (!_.isEmpty(formFields.aws_purchase_receipt)) {
    purchaseReceiptUploaded = (
      <div className="grid-x align-center text-center">
        <h5 className="cell shrink">Purchase Receipt Uploaded:
       {formFields.aws_purchase_receipt.path}
        </h5>
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
              * Possession Name:
             <input
                name="name"
                id="name"
                type="text"
                onChange={handleChange}
                value={formFields.name}
              />
            </label>

            <label>
              * Manufacturer:
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

            <div className="callout">
              <Dropzone onDrop={handleAWS_image_upload}>
                {({ getRootProps, getInputProps }) => (
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />

                    <div className="cell  grid-x ">
                      <div className="cell callout">
                        <div>
                          Product Image: Drag here or click to upload
                      </div>
                      </div>
                    </div>
                  </div>

                )}
              </Dropzone>
              {imageUploaded}
            </div>

            <div> You can fill these in later, if you want. </div>

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
            
            <label>
              Manufacturer Website:
             <input
                name="URL"
                id="URL"
                type="text"
                onChange={handleChange}
                value={formFields.URL}
              />
            </label>
            
            <label>
              Operating Video:
             <input
                name="operating_video"
                id="operating_video"
                type="text"
                onChange={handleChange}
                value={formFields.operating_video}
              />
            </label>
            
            <div className="callout">
              <Dropzone onDrop={handleAWS_owners_manual_upload}>
                {({ getRootProps, getInputProps }) => (
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />

                    <div className="cell grid-x">
                      <div className="cell callout">
                        <div>
                          Operating Manual: Drag here or click to upload
                      </div>
                      </div>
                    </div>
                  </div>
                )}
              </Dropzone>
              {owners_manualUploaded}
            </div>

            <div className="callout">
              <Dropzone onDrop={handleAWS_purchase_receipt}>
                {({ getRootProps, getInputProps }) => (
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />

                    <div className="cell grid-x">
                      <div className="cell callout">
                        <div>
                          Purchase Receipt: Drag here or click to upload
                      </div>
                      </div>
                    </div>
                  </div>
                )}
              </Dropzone>
              {purchaseReceiptUploaded}
            </div>
            <div className="callout">
              <Dropzone onDrop={handleAWS_warranty_upload}>
                {({ getRootProps, getInputProps }) => (
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />

                    <div className="cell grid-x">
                      <div className="cell callout">
                        <div>
                          Warranty: Drag here or click to upload
                      </div>
                      </div>
                    </div>
                  </div>
                )}
              </Dropzone>
              {warrantyUploaded}
            </div>

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


