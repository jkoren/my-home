// PossessionPage.js
import React, { useState, useEffect } from "react"
import PossessionShowTile from "./PossessionShowTile"
import PossessionEditTile from "./PossessionEditTile";
import PossessionDeleteTile from "./PossessionDeleteTile";
import _ from "lodash" 

const PossessionPage = (props) => {
  const [possession, setPossession] = useState({
    id: "",
    name: "",
    manufacturer: "",
    model: "",
    operating_video: "",
    image: "",
    aws_image: "",
    owners_manual: "",
    URL: "",
    purchase_receipt: ""
  })

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
      .catch((error) => console.error(`Error in fetch: ${error.message}`))
    }, [])
    
    // ---
    const [showEditTile, setShowEditTile] = useState(false);
    const [showDeleteTile, setShowDeleteTile] = useState(false);
    
    const onEditClickHandler = (event) => {
      setShowEditTile(true);
      setShowDeleteTile(false);
    };
    
    const onDeleteClickHandler = (event) => {
      setShowDeleteTile(true);
      setShowEditTile(false);
    };
    
    const onDiscardClickHandler = (event) => {
      setShowEditTile(false);
    };
    
    const onCancelDeleteClickHandler = (event) => {
      setShowDeleteTile(false);
    };
    
    const onSaveClickHandler = (formPayLoad) => {
      setShowEditTile(false);
      props.editPossession(formPayLoad);
    };
    
    const onConfirmDeleteClickHandler = (event) => {
      props.deletePossession(event);
    };
    
    let displayTile = null
    // if (!_.isEmpty(possession)) {
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
          // problem - props.possession does not exist..
          // props.match.params.id = 147
          // removed from above
          // handleVoteSubmit={props.handleVoteSubmit}
          // voteErrors={props.voteErrors}
          // what is displaytile?
          // ---
          // debugger

  return (
    <div>
      <div className="text-center">
        {/* {possessionShow} */}
        {displayTile}
      </div>
    </div>
  )
}

export default PossessionPage 