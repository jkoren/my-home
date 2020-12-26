// import React from "react";

// const PossessionDeleteTile = (props) => {
//   let nameDiv = null;

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     let formPayLoad = { id: props.possession.id, possession: props.possession };
//     props.deletePossession(formPayLoad);
//   };

//   return (
//     <div className="grid-container">
//         <div className="grid-x grid-margin-x">
          
//         <div className="cell ">
//           <h4>{props.possession.name}</h4>
//           <h5>{props.possession.manufacturer} {props.possession.model}</h5>
//         </div> 

//         <div className="cell small-12 medium-3">
//           <img src={props.possession.aws_image.url} alt="no picture" width="450" />
//         </div>

//         <div className="cell small-12 medium-3">
//           <button
//             className="button cell shrink"
//             type="button"
//             onClick={handleSubmit}
//           >
//             Yes Delete
//           </button>
//           <button
//             className="button cell shrink"
//             type="button"
//             onClick={props.onCancelDeleteClickHandler}
//           >
//             No! Keep
//           </button>
//         </div>
//         </div>
//       </div>
//   );
// };

// export default PossessionDeleteTile;
