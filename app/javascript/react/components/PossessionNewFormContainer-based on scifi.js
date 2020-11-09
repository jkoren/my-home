// PossessionNewFormContainer.js
import React, { useState } from 'react'
import Dropzone from 'react-dropzone'
import { Redirect } from 'react-router-dom'

import _ from 'lodash'

import ErrorList from './ErrorList'

const PossessionNewFormContainer = (props) => {
  const [submittedPossession, setSubmittedPossession] = useState({
    name: "",
    manufacturer: "",
    model: "",
    image: "",
    owners_manual: "",
    URL: "",
    purchase_receipt: ""
  })
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
    const requiredFields = ["name", "manufacturer", "model"]
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

    // name: "",
    //   manufacturer: "",
    //     model: "",
    //       image: "",
    //         owners_manual: "",
    //           URL: "",
    //             purchase_receipt: ""

    possession.append("possession[name]", submittedPossession.name)
    possession.append("possession[manufacturer]", submittedPossession.manufacturer)
    possession.append("possession[model]", submittedPossession.model)
    possession.append("possession[image]", submittedPossession.image)
    if (validforSubmission()) {
      fetch('/api/v1/possessions.json', {
        method: "POST",
        body: possession,
        credentials: "same-origin"
      })
        .then(response => response.json())
        .then(body => {
          if (body.errors) {
            const requiredFields = ["name", "manufacturer", "model"]
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
    return <Redirect to={`/possessions/${shouldRedirect.id}`} />
  }

  return (
    <div>
      <div>
        <p className="callout cell small-6">To add a new possession please enter name, manufacturer, and model!</p>
      </div>

      <div className="field">
        <form onSubmit={onClickHandler}>
          <ErrorList errors={errors}
            error={error} />

          <label>
            Title
            <input
              name="name"
              id="name"
              type="text"
              onChange={inputChangeHandler}
              value={submittedPossession.name}
            />
          </label>

          <label>
            Summary
            <input
              name="manufacturer"
              id="manufacturer"
              type="text"
              onChange={inputChangeHandler}
              value={submittedPossession.manufacturer}
            />
          </label>

          <label>
            Year
            <input
              name="model"
              id="model"
              type="text"
              onChange={inputChangeHandler}
              value={submittedPossession.model}
            />
          </label>

          <Dropzone onDrop={handleFileUpload}>
            {({ getRootProps, getInputProps }) => (
              <section>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p>Click to upload a possession poster</p>
                </div>
              </section>
            )}
          </Dropzone>

          <input
            type="submit"
            value="Add New Possession"
          />
        </form>
      </div>
    </div>
  )
}

export default PossessionNewFormContainer
