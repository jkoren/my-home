// PossessionEditTile.js
import React, { useState } from "react";
import Dropzone from 'react-dropzone'

const PossessionEditTile = (props) => {
  const [formFields, setFormFields] = useState({
    id: props.possession.id,
    name: props.possession.name,
    manufacturer: props.possession.manufacturer,
    model: props.possession.model,
    owner_manual: props.possession.owner_manual,
    description: props.possession.description,
    year_built: props.possession.year_built,
    purchased_from: props.possession.purchased_from,
    // image: props.possession.image,
    aws_image: props.possession.aws_image,
    purchase_date: props.possession.purchase_date,
    purchase_receipt: props.possession.purchase_receipt,
    purchase_price: props.possession.purchase_price,
    operating_video: props.possession.operating_video,
    URL: props.possession.URL,
    warranty: props.possession.warranty
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
    let messageUp = { id: props.possession.id, possession: formFields };
    props.editPossession(messageUp);
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
        <h5>Edit Possession</h5>
        <form onSubmit={handleSubmit}>

          <div className="cell grid-x grid-padding-x">
            <div className="cell small-12 medium-2"> </div>
            <div className="cell small-12 medium-8 text-left">
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
                  className="cell auto field"
                  type="text"
                  name="manufacturer"
                  id="manufacturer"
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

              <label>
                Owner's Manual:
              <input
                  name="owner_manual"
                  id="owner_manual"
                  type="text"
                  onChange={handleChange}
                  value={formFields.owner_manual}
                />
              </label>

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
            
              <Dropzone onDrop={handleFileUpload}>
                {({ getRootProps, getInputProps }) => (
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
                )}
              </Dropzone>
              {imageUploaded}


            <div className="grid-x grid-margin-x align-center">
              <input
                className="button cell shrink"
                type="submit"
                value="Save Possession"
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

export default PossessionEditTile;