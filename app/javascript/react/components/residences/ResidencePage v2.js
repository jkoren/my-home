// ResidencePage.js
import React, { useState, useEffect } from "react"
import ResidenceShowTile from "./ResidenceShowTile"
import ResidenceEditTile from "./ResidenceEditTile"
import ResidenceDeleteTile from "./ResidenceDeleteTile"
import { Redirect } from "react-router-dom"
import _ from "lodash" 

const ResidencePage = (props) => {
  const [formFields, setFormFields] = useState({
    street1: "",
    street2: "",
    city: "",
    state: "",
    zip_code: "",
    aws_image: "",
    display_area: "",
    note: ""
  })
  const [shouldRedirect,setShouldRedirect] = useState(false)
  const [showEditTile, setShowEditTile] = useState(false)
  const [showDeleteTile, setShowDeleteTile] = useState(false)

  const fetchResidence = () => {
    // THIS IS GETTING THE INITIAL DATA FROM RAILS WHEN THE PAGE LOADS
    fetch(`/api/v1/residences/${id}`, {
      credentials: "same-origin"
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw (error);
        }
      })
      .then((residence) => {
        setFormFields(residence)
      })
      .catch((error) => console.error(`Error in fetch (GET):${error.message}`))
  }

  const id = props.match.params.id 
  useEffect(() => {
    fetchResidence()
  }, [])

  const editResidence = (message) => {
    let residenceID = message.id;
    // THIS IS SENDING THE DATA TO RAILS FROM THE FORM
    let updatedResidence = new FormData()

    // MESSAGE.POSSESSION IS NEW DATA
    updatedResidence.append("street", message.residence.street)
    updatedResidence.append("street2", message.residence.street2)
    updatedResidence.append("city", message.residence.city)
    updatedResidence.append("state", message.residence.state)
    updatedResidence.append("zip_code", message.residence.zip_code)
    updatedResidence.append("aws_image", message.residence.aws_image)
    updatedResidence.append("display_area", message.residence.display_area)
    updatedResidence.append("note", message.residence.note)
    fetch(`/api/v1/residences/${residenceID}`, {
      method: "PATCH",
      body: updatedResidence,
      credentials: "same-origin",
      headers: {
        "Accept": "application/json",
        "Accept": "image/jpeg",
        "Accept": "multipart/form-data",
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
      .then (updatedResidence => {
        setFormFields(updatedResidence)
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  };

  const deleteResidence = (message) => {
    let residenceID = message.id;

    fetch(`/api/v1/residences/${residenceID}`, {
      credentials: "same-origin",
      method: "DELETE",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      }
    })
      .then((response) => {
        if (response.ok) {
          return response
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then((response) => response.json())
      .then((removeResidence) => {
        if (!removeResidence.errors) {
          setShouldRedirect({
            id: removeResidence.roomId
          })
        } else {
          setErrors(removeResidence.errors)
        }
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`))
  } 

  if (shouldRedirect) {
    return <Redirect to={`/rooms/${shouldRedirect.id}`} />
  }
  
  const onEditClickHandler = (event) => {
    setShowEditTile(true)
    setShowDeleteTile(false)
  }
  
  const onDeleteClickHandler = (event) => {
    setShowDeleteTile(true)
    setShowEditTile(false)
  }
  
  const onDiscardClickHandler = (event) => {
    setShowEditTile(false)
  }
  
  const onCancelDeleteClickHandler = (event) => {
    setShowDeleteTile(false)
  }
  
  const onSaveClickHandler = (formPayLoad) => {
    setShowEditTile(false)
    editResidence(formPayLoad)
  }
  
  const onConfirmDeleteClickHandler = (event) => {
    deleteResidence(event)
  }
  
  let displayResidenceTile = null

  if (!formFields.id == "") {
    if (showEditTile && !showDeleteTile) {
      displayResidenceTile = (
        <ResidenceEditTile
          residence={formFields}
          editResidence={onSaveClickHandler}
          onDiscardClickHandler={onDiscardClickHandler}
        />
      );
    } else if (showDeleteTile && !showEditTile) {
      displayResidenceTile = (
        <ResidenceDeleteTile
          residence={formFields}
          deleteResidence={onConfirmDeleteClickHandler}
          onCancelDeleteClickHandler={onCancelDeleteClickHandler}
        />
      );
    } else {
      displayResidenceTile = (
        <ResidenceShowTile
          residence={formFields}
          onEditClickHandler={onEditClickHandler}
          onDeleteClickHandler={onDeleteClickHandler}
        />
      );
    }
  }

      
  return (
    <div>
      <div className="text-center">
        {displayResidenceTile}
      </div>
    </div>
  )
}

export default ResidencePage 