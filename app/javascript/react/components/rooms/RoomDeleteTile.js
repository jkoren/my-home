import React from "react";

const RoomDeleteTile = (props) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    let formPayLoad = { id: props.room.id, room: props.room };
    props.deleteRoom(formPayLoad);
  };

  return (
    <div className="grid-container">
        <div className="grid-x grid-margin-x">
          
        <div className="cell ">
          <h4>{props.room.name}</h4>
          <h5>{props.room.manufacturer} {props.room.model}</h5>
        </div> 

        <div className="cell small-12 medium-3">
          <img src={props.room.aws_image.url} alt="missing aws picture" width="450" />
        </div>

        <div className="cell small-12 medium-3">
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
        </div>
      </div>
  );
};

export default RoomDeleteTile;
