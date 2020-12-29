// ResidenceEditTile.js
import React, { useState } from "react";
import Dropzone from 'react-dropzone'

const ResidenceEditTile = (props) => {
  const [formFields, setFormFields] = useState({
    id: props.residence.id,
    name: props.residence.name,
    street: props.residence.street,
    street2: props.residence.street2,
    city: props.residence.city,
    state: props.residence.state,
    zip_code: props.residence.zip_code,
    display_area: props.residence.display_area,
    note: props.residence.note,
    aws_image: props.residence.aws_image,
    rooms: props.residence.rooms
  });

  let aws_image_uploaded = null;
  
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
  
  const handleSubmit = (event) => {
    event.preventDefault();
    let messageUp = { id: props.residence.id, residence: formFields };
    props.editResidence(messageUp);
  };
  
  if (formFields.aws_image != props.residence.aws_image) {
    aws_image_uploaded = (
      <div className="grid-x align-center text-center">
        <h5 className="cell shrink">Image Uploaded:
         {formFields.aws_image.path}
        </h5>
      </div>
    );
  }

  return (
    <div className="cell grid-x grid-padding-x"> 

      <div className="cell small-12 medium-2">
        {/* spacer */}
      </div>

      <div className="cell small-12 medium-8">
   
        <form onSubmit={handleSubmit}>

          <label>
            * Residence Name:
            <input
              name="name"
              id="name"
              type="text"
              onChange={handleChange}
              value={formFields.name}
            />
          </label>

          <label>
            Address is not required.  Zip Code will help find service professionals near you.
          </label>

          <label>
            Zip Code:
              <input
              name="zip_code"
              id="zip_code"
              type="text"
              onChange={handleChange}
              value={formFields.zip_code}
            />
          </label>

          <label>
            Street:
              <input
              name="street"
              id="street"
              type="text"
              onChange={handleChange}
              value={formFields.street}
            />
          </label>

          <label>
            Street 2:
              <input
              name="street2"
              id="street2"
              type="text"
              onChange={handleChange}
              value={formFields.street2}
            />
          </label>

          <label>
            City:
              <input
              name="city"
              id="city"
              type="text"
              onChange={handleChange}
              value={formFields.city}
            />
          </label>

          <label>
            State:
              <input
              name="state"
              id="state"
              type="text"
              onChange={handleChange}
              value={formFields.state}
            />
          </label>

          <label>
            Note about this residence:
             <textarea
              name="note"
              rows="4"
              onChange={handleChange}
              value={formFields.note}
            />
          </label>

          {/* <div className="callout"> */}
            <Dropzone onDrop={handleAWS_image_upload}>
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()}>
                  <input {...getInputProps()} />

                  <div className="cell grid-x">
                    <div className="cell callout">
                      <div>
                        <i className="fas fa-image fa-1x"> </i>
                        Drag a residence image here, or click to upload one from your computer or mobile device
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Dropzone>
            {aws_image_uploaded}
          {/* </div> */}

          <label>
            <div className="grid-x grid-margin-x align-center">
              <input
                className="button cell shrink"
                type="submit"
                value="Save Residence"
              />
              <button
                className="button cell shrink"
                type="button"
                onClick={props.onDiscardClickHandler}
              > Discard Changes </button>
            </div>
          </label>

        </form>
      </div>

    </div>
  );
};

export default ResidenceEditTile;
