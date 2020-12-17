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
    aws_image: {},
    aws_owners_manual: {},
    aws_purchase_receipt:{},
    aws_warranty: {},
    purchase_receipt: {},
    operating_video: "",
    URL: "",
    zip_code: ""
  })
  const [professionals, setProfessionals] = useState([])
  const [manufacturer, setManufacturer] = useState("")
  const [zip_code, setZip_code] = useState("")
  const [shouldRedirect,setShouldRedirect] = useState(false)
  const [showEditTile, setShowEditTile] = useState(false)
  const [showDeleteTile, setShowDeleteTile] = useState(false)

  const fetchPossession = () => {
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
        setFormFields(responseBody)
      })
      .catch((error) => console.error(`Error in fetch (GET):${error.message}`))
  }

  const fetchProfessionals = (keywords, zip_code) => {
    fetch(`/api/v1/professionals/?query=${keywords}&zip_code=${zip_code}`, {
      credentials: "same-origin"
    })
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw (error);
        }
      })
      .then(response => response.json())
      .then((body) => {
        setProfessionals(body)
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`))
  }

  const id = props.match.params.id 
  useEffect(() => {
    //-------
    // fetchPossession()
    // debugger 
    // why isn't formFields available here? 
    // a timing delay in response from backend?
    // Need to get possession.residence.zip_code and manufacturer
    // fetchProfessionals("veterinary","02760")
    //--------
    // fetchPossession()
    //   .then(fetchProfessionals("veterinary", "02760"))
    //----------
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
        setManufacturer(responseBody.manufacturer)
        setZip_code(responseBody.zip_code)
        // debugger // state variables manufacturer and zip_code are not assigned any values for the fetch below
        setFormFields(responseBody)
      })
      .then (fetch(`/api/v1/professionals/?query=${manufacturer}&zip_code=${zip_code}`, {
      credentials: "same-origin"
    })
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw (error);
        }
      })
      .then(response => response.json())
      .then((body) => {
        setProfessionals(body)
      }))
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
    updatedPossession.append("aws_image", message.possession.aws_image)
    updatedPossession.append("aws_owners_manual", message.possession.aws_owners_manual)
    updatedPossession.append("aws_purchase_receipt", message.possession.aws_purchase_receipt)
    updatedPossession.append("aws_warranty", message.possession.aws_warranty)
    updatedPossession.append("operating_video", message.possession.operating_video)
    updatedPossession.append("URL", message.possession.URL)
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
  
  let displayPossessionTile = null

  if (!formFields.id == "") {
    if (showEditTile && !showDeleteTile) {
      displayPossessionTile = (
        <PossessionEditTile
          possession={formFields}
          editPossession={onSaveClickHandler}
          onDiscardClickHandler={onDiscardClickHandler}
        />
      );
    } else if (showDeleteTile && !showEditTile) {
      displayPossessionTile = (
        <PossessionDeleteTile
          possession={formFields}
          deletePossession={onConfirmDeleteClickHandler}
          onCancelDeleteClickHandler={onCancelDeleteClickHandler}
        />
      );
    } else {
      displayPossessionTile = (
        <PossessionShowTile
          possession={formFields}
          professionals={professionals}
          onEditClickHandler={onEditClickHandler}
          onDeleteClickHandler={onDeleteClickHandler}
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