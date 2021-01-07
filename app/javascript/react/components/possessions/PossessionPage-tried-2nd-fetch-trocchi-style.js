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
    owner_manual: "",
    description: "",
    aws_image: {},
    aws_owners_manual: {},
    aws_purchase_receipt:{},
    aws_warranty: {},
    purchase_receipt: {},
    operating_video: "",
    share_on_new_possession_list: true,
    URL: "",
    zip_code: "",
    demo: false,
    aws_tag: {}
  })
  const [professionals, setProfessionals] = useState([])
  const [manuals, setManuals] = useState([])
  const [shouldRedirect,setShouldRedirect] = useState(false)
  const [showEditTile, setShowEditTile] = useState(false)
  const [showDeleteTile, setShowDeleteTile] = useState(false)

  const fetchPossessionAndProfessionalsAndManuals = () => {
    // THIS IS GETTING THE INITIAL DATA FROM RAILS WHEN THE PAGE LOADS
    fetch(`/api/v1/possessions/${id}`, {
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
      .then((responseBody) => {
        setPossession(responseBody.possession)
        setProfessionals(responseBody.professionals)
        setManuals(responseBody.manuals)
      })
      .catch((error) => console.error(`Error in fetch (GET):${error.message}`))
  }

  const id = props.match.params.id 
  useEffect(() => {
    fetchPossessionAndProfessionalsAndManuals()
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
    updatedPossession.append("aws_image", message.possession.aws_image)
    updatedPossession.append("aws_owners_manual", message.possession.aws_owners_manual)
    updatedPossession.append("aws_purchase_receipt", message.possession.aws_purchase_receipt)
    updatedPossession.append("aws_warranty", message.possession.aws_warranty)
    updatedPossession.append("operating_video", message.possession.operating_video)
    updatedPossession.append("share_on_new_possession_list", message.possession.share_on_new_possession_list)
    updatedPossession.append("URL", message.possession.URL)
    updatedPossession.append("aws_tag", message.possession.aws_tag)

    // fetch POST #1
    // debugger // what does updatedPossession look like?
    fetch(`/api/v1/possessions/${possessionId}`, {
      method: "PATCH",
      body: updatedPossession,
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
      .then (updatedPossession => {
        setPossession(updatedPossession)
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  };

  const changeManual = (manualURL) => {
    // THIS IS GETTING THE INITIAL DATA FROM RAILS WHEN THE PAGE LOADS
    fetch(`/api/v1/possessions/${id}`, {
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
    .then((responseBody) => {
      setPossession(responseBody.possession)
    })
    .catch((error) => console.error(`Error in fetch (GET):${error.message}`))
    
    console.log("changing manual to: "+manualURL)
    // this will store a link to manualsonline.com but not save it to AWS - I want to save it to AWS - how does dropzone do that?
    possession.aws_owners_manual = { url: manualURL } 
    
    debugger // what does possession look like?
    fetch(`/api/v1/possessions/${id}`, {
      method: "PATCH",
      body: possession,
      credentials: "same-origin",
      headers: {
        "Accept": "application/json",
        "Accept": "image/jpeg",
        "Accept": "multipart/form-data",
        },
      })
      .then((response) => {
        debugger
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
        setPossession(updatedPossession)
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

  const onManualSaveClick = (manualURL) => {
    changeManual(manualURL)
  }
  
  let displayPossessionTile = null

  if (!possession.id == "") {
    if (showEditTile && !showDeleteTile) {
      displayPossessionTile = (
        <PossessionEditTile
          possession={possession}
          editPossession={onSaveClickHandler}
          onDiscardClickHandler={onDiscardClickHandler}
        />
      );
    } else if (showDeleteTile && !showEditTile) {
      displayPossessionTile = (
        <PossessionDeleteTile
          possession={possession}
          deletePossession={onConfirmDeleteClickHandler}
          onCancelDeleteClickHandler={onCancelDeleteClickHandler}
        />
      );
    } else {
      displayPossessionTile = (
        <PossessionShowTile
          possession={possession}
          professionals={professionals}
          manuals={manuals}
          onEditClickHandler={onEditClickHandler}
          onDeleteClickHandler={onDeleteClickHandler}
          onManualSaveClick={onManualSaveClick}
        />
      );
    }
  }

  return (
    <div>
      <div className="text-center">
        {displayPossessionTile}
      </div>
    </div>
  )
}

export default PossessionPage 