// RoomEditTile.js
import React, { useState } from "react";
import Dropzone from 'react-dropzone'

const RoomEditTile = (props) => {
  const [formFields, setFormFields] = useState({
    id: props.room.id,
    name: props.room.name,
    description: props.room.description,
    aws_image: props.room.aws_image
  });

  let imageUploaded = null;

  const handleFileUpload = (acceptedFiles) => {
    setFormFields({
      ...formFields,
      aws_image: acceptedFiles[0]
    })
  }

  const handleChange = (event) => {
    setFormFields({
      ...formFields,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let messageUp = { id: props.room.id, room: formFields };
    props.editRoom(messageUp);
  };

  if (formFields.aws_image != "") {
    imageUploaded = (
      <div className="grid-x align-center text-center">
        <h5 className="cell shrink">Image Uploaded: {formFields.aws_image.path}</h5>
      </div>
    );
  }

  return (
    <div className="grid-container">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />
      <div className="field">
        <h5>Edit Room</h5>
        <form onSubmit={handleSubmit}>

          <div className="cell grid-x grid-padding-x">
            <div className="cell small-12 medium-2"> 
            {/* spacer */}
            </div>
              <div className="cell small-12 medium-8 text-left">
                <label>
                  Room Name:
                  <input
                    name="name"
                    id="name"
                    type="text"
                    onChange={handleChange}
                    value={formFields.name}
                  />
                </label>

                <label>
                  Description of this room:
                <input
                    name="description"
                    id="description"
                    type="text"
                    onChange={handleChange}
                    value={formFields.description}
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
                            Drag a room image here, or click to upload one from your computer or mobile device
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </Dropzone>
                {imageUploaded}


              <div className="grid-x grid-margin-x align-center">
                <input
                  className="button cell shrink"
                  type="submit"
                  value="Save Room"
                />
                <button
                  className="button cell shrink"
                  type="button"
                  onClick={props.onDiscardClickHandler}
                >
                  Discard Changes
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RoomEditTile;
