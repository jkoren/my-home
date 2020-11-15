// PossessionEditTile.js
import React, { useState } from "react";
// import RatingRadioGroup from "./RatingRadioGroup";

const PossessionEditTile = (props) => {
  const [formFields, setFormFields] = useState({
    id: props.possession.id,
    name: props.possession.name,
    manufacturer: props.possession.manufacturer,
    model: props.possession.model,
    operating_video: props.possession.operating_video,
    image: props.possession.image,
    aws_image: props.possession.aws_image,
    owners_manual: props.possession.owners_manual,
    URL: props.possession.URL,
    purchase_receipt: props.possession.purchase_receipt
  });


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
// debugger
  return (
    <div className="grid-container">
      <div className="field">
        <h5>Edit Possession</h5>
        <form onSubmit={handleSubmit}>

          <div className="cell grid-x grid-padding-x">
            <div className="cell small-12 medium-2"> </div>
            <div className="cell small-12 medium-8 text-left">
              {/* <label className="cell small-2 text-right" htmlFor="name">
                <h5>Name:</h5>
              </label>
              <input
                className="cell auto field"
                type="text"
                name="name"
                id="name"
                onChange={handleFieldChange}
                value={formFields.name}
              /> */}
              <label>
                Possession Name:
                <input
                  name="name"
                  id="name"
                  type="text"
                  onChange={handleChange}
                  value={formFields.name}
                />
              </label>

              <label>
                Manufacturer:
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

              {/* below is only for displaying URL */}
              <label>
                Image:
              <input
                  name="image"
                  id="image"
                  type="text"
                  onChange={handleChange}
                  value={formFields.image}
                />
              </label>

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
