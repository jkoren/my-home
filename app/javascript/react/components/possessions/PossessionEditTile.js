// PossessionEditTile.js
import React, { useState } from "react";
import Dropzone from 'react-dropzone'

const PossessionEditTile = (props) => {
  const [formFields, setFormFields] = useState({
    id: props.possession.id,
    name: props.possession.name,
    manufacturer: props.possession.manufacturer,
    model: props.possession.model,
    description: props.possession.description,
    aws_image: props.possession.aws_image,
    aws_owners_manual: props.possession.aws_owners_manual,
    aws_purchase_receipt: props.possession.aws_purchase_receipt,
    aws_warranty: props.possession.aws_warranty,
    operating_video: props.possession.operating_video,
    URL: props.possession.URL,
  });

  let imageUploaded = null;
  let owners_manualUploaded = null;
  let warrantyUploaded = null;
  let purchaseReceiptUploaded = null;


  const handleChange = (event) => {
    setFormFields({
      ...formFields,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleAWS_image_upload = (acceptedFiles) => {
    setFormFields({
      ...formFields,
      aws_image: acceptedFiles[0]
    })
  }

  const handleAWS_owners_manual_upload = (acceptedFiles) => {
    setFormFields({
      ...formFields,
      aws_owners_manual: acceptedFiles[0]
    })
  }

  const handleAWS_warranty_upload = (acceptedFiles) => {
    setFormFields({
      ...formFields,
      aws_warranty: acceptedFiles[0]
    })
  }

  const handleAWS_purchase_receipt = (acceptedFiles) => {
    setFormFields({
      ...formFields,
      aws_purchase_receipt: acceptedFiles[0]
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let messageUp = { id: props.possession.id, possession: formFields };
    props.editPossession(messageUp);
  };

  if (!_.isEmpty(formFields.aws_image)) {
    imageUploaded = (
      <div className="grid-x align-center text-center">
        <h5 className="cell shrink">Image Uploaded:
         {formFields.aws_image.path}
        </h5>
      </div>
    );
  }

  if (!_.isEmpty(formFields.aws_owners_manual)) {
    owners_manualUploaded = (
      <div className="grid-x align-center text-center">
        <h5 className="cell shrink">Owner's Manual Uploaded: 
          {formFields.aws_owners_manual.path}
        </h5>
      </div>
    );
  }

  if (!_.isEmpty(formFields.aws_warranty)) {
    warrantyUploaded = (
      <div className="grid-x align-center text-center">
        <h5 className="cell shrink">Warranty Uploaded:
       {formFields.aws_warranty.path}
        </h5>
      </div>
    );
  }

  if (!_.isEmpty(formFields.aws_purchase_receipt)) {
    purchaseReceiptUploaded = (
      <div className="grid-x align-center text-center">
        <h5 className="cell shrink">Purchase Receipt Uploaded:
       {formFields.aws_purchase_receipt.path}
        </h5>
      </div>
    );
  }

  return (
    <div className="cell grid-x grid-padding-x"> {/* enclosing container */}

      <div className="cell small-12 medium-2"> 
        {/* spacer */}
      </div>

      <div className="cell small-12 medium-8">
        <form onSubmit={handleSubmit}>
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

          <div className="callout">
            <Dropzone onDrop={handleAWS_image_upload}>
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()}>
                  <input {...getInputProps()} />

                  <div className="cell grid-x grid-margin-x">
                    <div className="cell callout small-6">
                      <div>
                        <i className="fas fa-image fa-1x"> </i>
                        Product Image: Drag here or click to upload
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Dropzone>
            {imageUploaded}
          </div>

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
        
          <label>
            Manufacturer's Web Site:
              <input
              name="URL"
              id="URL"
              type="text"
              onChange={handleChange}
              value={formFields.URL}
            />
          </label>

          <label>
            Operating Video:
              <input
              name="operating_video"
              id="operating_video"
              type="text"
              onChange={handleChange}
              value={formFields.operating_video}
            />
          </label>

          <div className="callout">
            <Dropzone onDrop={handleAWS_owners_manual_upload}>
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()}>
                  <input {...getInputProps()} />

                  <div className="cell grid-x grid-margin-x">
                    <div className="cell callout small-6">
                      <div>
                        <i className="fas fa-book fa-1x"> </i>
                        Operating Manual: Drag here or click to upload
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Dropzone>
            {owners_manualUploaded}
          </div>

          <div className="callout">
            <Dropzone onDrop={handleAWS_purchase_receipt}>
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()}>
                  <input {...getInputProps()} />

                  <div className="cell grid-x">
                    <div className="cell callout">
                      <div>
                        Purchase Receipt: Drag here or click to upload
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Dropzone>
            {purchaseReceiptUploaded}
          </div>

          <div className="callout">
            <Dropzone onDrop={handleAWS_warranty_upload}>
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()}>
                  <input {...getInputProps()} />

                  <div className="cell grid-x">
                    <div className="cell callout">
                      <div>
                        Warranty: Drag here or click to upload
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Dropzone>
            {warrantyUploaded}
          </div>


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
            > Discard Changes </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default PossessionEditTile;
