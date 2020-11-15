import React from "react";

const PossessionDeleteTile = (props) => {
  let nameDiv = null;

  const handleSubmit = (event) => {
    event.preventDefault();
    let formPayLoad = { id: props.possession.id, possession: props.possession };
    props.deletePossession(formPayLoad);
  };

  if (props.possession.name !== "" && props.possession.name !== null) {
    nameDiv = (
      <div className="grid-x">
        <h5 id="name-label" className="cell shrink">
          Name:
        </h5>
        <div className="cell auto callout">
          {props.possession.name}
          some field
        </div>
      </div>
    );
  }

  return (
    <div className="grid-container">
      <div className="callout">
        <div className="grid-x grid-margin-x align-top">
          <h5 className="cell shrink">Manufacturer:</h5>
          <h5 className="cell auto">
            Manufacturer:{props.possession.manufacturer}
          </h5>
          <button
            className="button cell shrink"
            type="button"
            onClick={handleSubmit}
          >
            Yes Delete
          </button>
          <button
            className="button cell shrink"
            type="button"
            onClick={props.onCancelDeleteClickHandler}
          >
            No! Keep
          </button>
        </div>
        {nameDiv}
      </div>
    </div>
  );
};

export default PossessionDeleteTile;
