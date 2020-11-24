// PossessionPage.js
import React, { useState, useEffect } from "react"
import PossessionShowTile from "./PossessionShowTile"
import PossessionEditTile from "./PossessionEditTile"
import PossessionDeleteTile from "./PossessionDeleteTile"
import { Redirect } from "react-router-dom"
import _ from "lodash" 

const PossessionPage = (props) => {
  const [possession, setPossession] = useState({
    id: "",
    name: "",
    manufacturer: "",
    model: "",
    operating_video: "",
    image: "",
    aws_image: {},
    owners_manual: "",
    URL: "",
    purchase_receipt: ""
  })
  const [isSaved, setIsSaved] = useState(false)
  const [shouldRedirect,setShouldRedirect] = useState(false)
  const [showEditTile, setShowEditTile] = useState(false)
  const [showDeleteTile, setShowDeleteTile] = useState(false)
  
  const id = props.match.params.id 
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
        setPossession(responseBody)
      })
      .catch((error) => console.error(`Error in fetch (GET):${error.message}`))
    }, [isSaved])

  const editPossession = (message) => {

    let possessionId = message.id;
    let payload = message.possession;
    fetch(`/api/v1/rooms/${id}/possessions/${possessionId}`, {
      credentials: "same-origin",
      method: "PATCH",
      body: JSON.stringify(payload),
      headers: {
        Accept: "application/json",
        Accept: "image/jpeg",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setIsSaved(true)
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then((response) => response.json())
      .then (newPossessionImage => {
        setPossession([...possessions,newPossessionImage])
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  };

  const deletePossession = (message) => {
    let possessionId = message.id;

    fetch(`/api/v1/rooms/${id}/possessions/${possessionId}`, {
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

  if (!possession.id == "") {
    if (showEditTile && !showDeleteTile) {
      displayTile = (
        <PossessionEditTile
          possession={possession}
          editPossession={onSaveClickHandler}
          onDiscardClickHandler={onDiscardClickHandler}
        />
        );
      } else if (showDeleteTile && !showEditTile) {
        displayTile = (
          <PossessionDeleteTile
            possession={possession}
            deletePossession={onConfirmDeleteClickHandler}
            onCancelDeleteClickHandler={onCancelDeleteClickHandler}
          />
          );
        } else {
          displayTile = (
            <PossessionShowTile
              possession={possession}
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