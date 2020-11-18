//RealtorShowTile.js
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const RealtorShowTile = (props) => {
  // debugger
  return (
    <div className="grid-x grid-padding-x">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />
      <div className="cell ">
        <h4>{props.realtor.name}</h4>
        {/* <h5>{props.realtor.manufacturer} {props.realtor.model}</h5> */}
      </div> 

        <div className="cell small-12 medium-3">
          <img src={props.realtor.aws_image.url} alt="missing aws picture" width="450" />
        </div>

      {/* <div className="cell small-12 medium-3">
        <img src={props.realtor.image.url} alt="missing aws picture" width="450" />
      </div> */}


        {/* <div className="grid-x align-bottom">
          
          <br></br>


          <div className=" small-12 medium-2">
          </div>

          <div className="small-12 medium-2 text-center hover-zoom">
            <br></br> <br></br> <br></br> <br></br>
            <button
              type="button"
              className="button cell shrink"
              id="edit-realtor"
              onClick={props.onEditClickHandler}
            >
              Edit
            </button>
          </div>

          <div className=" small-12 medium-2">
          </div>

          <div className=" small-12 medium-2 text-center hover-zoom">
            <button
              type="button"
              className="button cell shrink"
              id="delete-realtor"
              onClick={props.onDeleteClickHandler}
            >
              Delete
            </button>
          </div>
        </div> */}


      </div> 

  )
}

export default RealtorShowTile