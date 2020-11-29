// PossessionPage.js
import React, { useState, useEffect } from "react"
import PossessionShowTile from "./PossessionShowTile"
import PossessionEditTile from "./PossessionEditTile"
import PossessionDeleteTile from "./PossessionDeleteTile"
import { Redirect } from "react-router-dom"
import _ from "lodash" 

const PossessionPage = (props) => {
  const [formFields, setFormFields] = useState({
    id: "",
    name: "",
    manufacturer: "",
    model: "",
    owner_manual: "",
    description: "",
    year_built: "",
    purchased_from: "",
    aws_image: "",
    aws_owners_manual: "",
    aws_purchase_receipt: "",
    aws_warranty: "",
    purchase_date: "",
    purchase_receipt: "",
    purchase_price: "",
    operating_video: "",
    URL: "",
    warranty: ""
  })
  const [shouldRedirect,setShouldRedirect] = useState(false)
  const [showEditTile, setShowEditTile] = useState(false)
  const [showDeleteTile, setShowDeleteTile] = useState(false)

  const id = props.match.params.id 
  // THIS IS GETTING THE INITIAL DATA FROM RAILS WHEN THE PAGE LOADS
  useEffect(() => {
    fetch(`/api/v1/possessions/${id}`, {
      credentials: "same-origin"
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
          throw(error);
        }
      })
      .then((responseBody) => {
        setFormFields(responseBody)
      })
      .catch((error) => console.error(`Error in fetch (GET):${error.message}`))
    }, [])

  const editPossession = (message) => {
    let possessionId = message.id;
    // THIS IS SENDING THE DATA TO RAILS FROM THE FORM
    let updatedPossession = new FormData()

    // MESSAGE.POSSESSION IS NEW DATA
    updatedPossession.append("name", message.possession.name)
    updatedPossession.append("manufacturer", message.possession.manufacturer)
    updatedPossession.append("model", message.possession.model)
    updatedPossession.append("owners_manual", message.possession.owners_manual)
    updatedPossession.append("description", message.possession.description)
    updatedPossession.append("year_built", message.possession.year_built)
    updatedPossession.append("purchased_from", message.possession.purchased_from)
    updatedPossession.append("aws_image", message.possession.aws_image)
    updatedPossession.append("aws_owners_manual", message.possession.aws_owners_manual)
    updatedPossession.append("aws_purchase_receipt", message.possession.aws_purchase_receipt)
    updatedPossession.append("aws_warranty", message.possession.aws_warranty)
    updatedPossession.append("purchase_date", message.possession.purchase_date)
    updatedPossession.append("purchase_price", message.possession.purchase_price)
    updatedPossession.append("operating_video", message.possession.operating_video)
    updatedPossession.append("URL", message.possession.URL)
    updatedPossession.append("warranty", message.possession.warranty)
    fetch(`/api/v1/possessions/${possessionId}`, {
      method: "PATCH",
      body: updatedPossession,
      credentials: "same-origin",
      headers: {
        "Accept": "application/json",
        "Accept": "image/jpeg",
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
      .then (updatedPossession => {
        setFormFields(updatedPossession)
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  };

  const deletePossession = (message) => {
    let possessionId = message.id;

    fetch(`/api/v1/possessions/${possessionId}`, {
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
      .then((removePossession) => {
        if (!removePossession.errors) {
          setShouldRedirect({
            id: removePossession.roomId
          })
        } else {
          setErrors(removePossession.errors)
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
    editPossession(formPayLoad)
  }
  
  const onConfirmDeleteClickHandler = (event) => {
    deletePossession(event)
  }
  
  let displayTile = null

  if (!formFields.id == "") {
    if (showEditTile && !showDeleteTile) {
      displayTile = (
        <PossessionEditTile
          possession={formFields}
          editPossession={onSaveClickHandler}
          onDiscardClickHandler={onDiscardClickHandler}
        />
        );
      } else if (showDeleteTile && !showEditTile) {
        displayTile = (
          <PossessionDeleteTile
            possession={formFields}
            deletePossession={onConfirmDeleteClickHandler}
            onCancelDeleteClickHandler={onCancelDeleteClickHandler}
          />
          );
        } else {
          displayTile = (
            <PossessionShowTile
              possession={formFields}
              onEditClickHandler={onEditClickHandler}
              onDeleteClickHandler={onDeleteClickHandler}
            />
            );
          }
        }

  return (
    <div>
      <div className="text-center">
        {displayTile}
      </div>
    </div>
  )
}

export default PossessionPage 