// PossessionNewForm.js
import React, { useState } from 'react'
import Dropzone from 'react-dropzone'
import { Redirect } from 'react-router-dom'
import _ from 'lodash'
import ErrorList from './ErrorList'

const PossessionNewForm = (props) => {
  const [submittedPossession, setSubmittedPossession] = useState({
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

  let imageUploaded = null;
  let ownerManualUploaded = null;

  const [shouldRedirect, setShouldRedirect] = useState({
    redirect: false,
    id: ""
  })

  const [errors, setErrors] = useState({})
  const [error, setError] = useState(null)

  const handleFileUpload = (acceptedFiles) => {
    setSubmittedPossession({
      ...submittedPossession,
      image: acceptedFiles[0]
    })
  }

  const validforSubmission = () => {
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

  const inputChangeHandler = (event) => {
    setSubmittedPossession({
      ...submittedPossession,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const onClickHandler = (event) => {
    event.preventDefault()
    let possession = new FormData()
    possession.append("possession[name]", submittedPossession.name)
    possession.append("possession[manufacturer]", submittedPossession.manufacturer)
    possession.append("possession[model]", submittedPossession.model)
    possession.append("possession[owner_manual]", submittedPossession.owner_manual)
    possession.append("possession[description]", submittedPossession.description)
    possession.append("possession[year_built]", submittedPossession.year_built)
    possession.append("possession[purchased_from]", submittedPossession.purchased_from)
    possession.append("possession[purchased_from]", submittedPossession.name)
    possession.append("possession[image]", submittedPossession.image)
    possession.append("possession[purchase_date]", submittedPossession.purchase_date)
    possession.append("possession[purchase_receipt]", submittedPossession.purchase_receipt)
    possession.append("possession[purchase_price]", submittedPossession.purchase_price)
    possession.append("possession[operating_video]", submittedPossession.operating_video)
    possession.append("possession[URL]", submittedPossession.URL)
    possession.append("possession[warranty]", submittedPossession.warranty)
    if (validforSubmission(submittedPossession)) {
      // for some reason the image is not posting to the database - start debugging her - see article "File Uploading in React - or look at SCI FI Review site"
      // debugger
      fetch(`/api/v1/rooms/${props.match.params.id}/possessions`, {
        credentials: "same-origin",
        method: "POST",
        body: JSON.stringify(submittedPossession),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      })
        .then(response => response.json())
        .then(body => {
          if (body.errors) {
            const requiredFields = ["name", "manufacturer"]
            requiredFields.forEach(field => {
              if (body.errors[field] !== undefined) {
                setErrors({
                  ...errors,
                  [field]: body.errors[field][0]
                })
              }
            })
          } else if (body.error) {
            setError(body.error)
          } else {
            setShouldRedirect({
              redirect: true,
              id: body.id
            })
          }
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`))
    }
  }

  if (shouldRedirect.redirect) {
    return <Redirect to={`/rooms/${props.match.params.id}`}/>
  }

  if (submittedPossession.image != "") {
    imageUploaded = (
      <div className="grid-x align-center text-center">
        <h5 className="cell shrink">Image Uploaded: {submittedPossession.image.path}</h5>
      </div>
    );
  }

  if (submittedPossession.owner_manual != "") {
    ownerManualUploaded = (
      <div className="grid-x align-center text-center">
        <h5 className="cell shrink">Owner's Manual Uploaded: {submittedPossession.owner_manual.path}</h5>
      </div>
    );
  }
  return (
    
    <div className="cell grid-x grid-padding-x">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />
      <div className="cell small-12 medium-2">
      </div>
      <div className="cell small-12 medium-8">
        
        <div className="field">
          <form onSubmit={onClickHandler}>
            <ErrorList errors={errors}
              error={error} />

            <label>
              Possession Name:
                    <input
                name="name"
                id="name"
                type="text"
                onChange={inputChangeHandler}
                value={submittedPossession.name}
              />
            </label>


            <label>
              Manufacturer:
              <input
                name="manufacturer"
                id="manufacturer"
                type="text"
                onChange={inputChangeHandler}
                value={submittedPossession.manufacturer}
              />
            </label>

            <label>
              Model:
              <input
                name="model"
                id="model"
                type="text"
                onChange={inputChangeHandler}
                value={submittedPossession.model}
              />
            </label>

            <label>
              Owner's Manual:
              <input
                name="owner_manual"
                id="owner_manual"
                type="text"
                onChange={inputChangeHandler}
                value={submittedPossession.owner_manual}
              />
            </label>

            <label>
              Description of this possession:
              <input
                name="description"
                id="description"
                type="text"
                onChange={inputChangeHandler}
                value={submittedPossession.description}
              />
            </label>

            {/* below is only for displaying URL */}
{/* 
            <label>
              Image:
              <input
                name="image"
                id="image"
                type="text"
                onChange={inputChangeHandler}
                value={submittedPossession.image}
              />
            </label> */}

            <Dropzone onDrop={handleFileUpload}>
              {({ getRootProps, getInputProps }) => (
                // <div>
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
                // </div>
              )}
            </Dropzone>
            {imageUploaded}

            {/* <Dropzone onDrop={handleFileUpload}>
              {({ getRootProps, getInputProps }) => (
                // <div>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />

                    <div className="cell  grid-x ">

                      <div className="cell medium-6 callout">
                        <div>
                          <i className="fas fa-book fa-3x"> </i>
                          Drag an owner's manual document here, or click to upload one from your computer
                        </div>
                      </div>

                    </div>
                  </div>
                // </div>
              )}
            </Dropzone>
            {ownerManualUploaded}
 */}

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
