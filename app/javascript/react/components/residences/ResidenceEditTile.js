// // ResidenceEditTile.js
// import React, { useState } from "react";
// import Dropzone from 'react-dropzone'

// const ResidenceEditTile = (props) => {
//   const [formFields, setFormFields] = useState({
//     id: props.residence.id,
//     name: props.residence.name,
//     street: props.residence.street,
//     street2: props.residence.street2,
//     city: props.residence.city,
//     zip_code: props.residence.zip_code,
//     aws_image: props.residence.aws_image,
//     note: props.residence.note,
//     rooms: props.residence.rooms
//   });
//   let aws_image_uploaded = null;


//   const handleChange = (event) => {
//     setFormFields({
//       ...formFields,
//       [event.currentTarget.name]: event.currentTarget.value,
//      });
//   };

//   const handleAWS_image_upload = (acceptedFiles) => {
//     setFormFields({
//       ...formFields,
//       aws_image: acceptedFiles[0]
//     })
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     let messageUp = { id: props.residence.id, residence: formFields };
//     props.editResidence(messageUp);
//   };

//   if (formFields.aws_image != props.residence.aws_image) {
//     aws_image_uploaded = (
//       <div className="grid-x align-center text-center">
//         <h5 className="cell shrink">Image Uploaded:
//          {formFields.aws_image.path}
//         </h5>
//       </div>
//     );
//   }
  
// // debugger
//   return (
//     <div className="cell grid-x grid-padding-x"> {/* enclosing container */}

//       <div className="cell small-12 medium-2"> 
//         {/* spacer */}
//       </div>

//       <div className="cell small-12 medium-8">
//         <form onSubmit={handleSubmit}>
//           <label>
//             * Residence Name:
//             <input
//               name="name"
//               id="name"
//               type="text"
//               onChange={handleChange}
//               value={formFields.name}
//             />
//           </label>

//           <div className="callout">
//             <Dropzone onDrop={handleAWS_image_upload}>
//               {({ getRootProps, getInputProps }) => (
//                 <div {...getRootProps()}>
//                   <input {...getInputProps()} />

//                   <div className="cell grid-x">
//                     <div className="cell callout">
//                       <div>
//                         <i className="fas fa-image fa-1x"> </i>
//                         Image: Drag here or click to upload
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </Dropzone>
//             {aws_image_uploaded}
//           </div>
        
//           <label>
//             Description of this residence:
//              <textarea
//               name="description"
//               rows="4"
//               onChange={handleChange}
//               value={formFields.description}
//             />
//           </label>

//           <label>
//             Manufacturer's Web Site:
//               <input
//               name="URL"
//               id="URL"
//               type="text"
//               onChange={handleChange}
//               value={formFields.URL}
//             />
//           </label>

//           <label>
//             Operating Video:
//               <input
//               name="operating_video"
//               id="operating_video"
//               type="text"
//               onChange={handleChange}
//               value={formFields.operating_video}
//             />
//           </label>

//           <div className="callout">
//             <Dropzone onDrop={handleAWS_owners_manual_upload}>
//               {({ getRootProps, getInputProps }) => (
//                 <div {...getRootProps()}>
//                   <input {...getInputProps()} />

//                   <div className="cell grid-x">
//                     <div className="cell callout">
//                       <div>
//                         <i className="fas fa-book fa-1x"> </i>
//                         Operating Manual: Drag here or click to upload
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </Dropzone>
//             {owners_manualUploaded}
//           </div>

//           <div className="callout">
//             <Dropzone onDrop={handleAWS_purchase_receipt}>
//               {({ getRootProps, getInputProps }) => (
//                 <div {...getRootProps()}>
//                   <input {...getInputProps()} />

//                   <div className="cell grid-x">
//                     <div className="cell callout">
//                       <div>
//                         Purchase Receipt: Drag here or click to upload
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </Dropzone>
//             {purchaseReceiptUploaded}
//           </div>

//           <div className="callout">
//             <Dropzone onDrop={handleAWS_warranty_upload}>
//               {({ getRootProps, getInputProps }) => (
//                 <div {...getRootProps()}>
//                   <input {...getInputProps()} />

//                   <div className="cell grid-x">
//                     <div className="cell callout">
//                       <div>
//                         Warranty: Drag here or click to upload
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </Dropzone>
//             {warrantyUploaded}
//           </div>


//           <label>
//             Share on New Residences List:
//             <input
//               name="share_on_new_residence_list"
//               id="share_on_new_residence_list"
//               type="checkbox"
//               checked={formFields.share_on_new_residence_list}
//               onChange={handleChange}
//             />

//           <div className="grid-x grid-margin-x align-center">
//             <input
//               className="button cell shrink"
//               type="submit"
//               value="Save Residence"
//             />
//             <button
//               className="button cell shrink"
//               type="button"
//               onClick={props.onDiscardClickHandler}
//             > Discard Changes </button>
//           </div>
//           </label>          

//         </form>
//       </div>
//     </div>
//   );
// };

// export default ResidenceEditTile;
