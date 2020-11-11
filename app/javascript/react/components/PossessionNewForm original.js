// PossessionNewForm.js
// based on launch-sc-4-react-simple-blog
// import React, { useState, useEffect } from "react"
// import Dropzone from "react-dropzone";
// import { Redirect } from 'react-router-dom'

// import _ from 'lodash'

// let photoUploaded = null;

// const PossessionNewForm = (props) => {
//   const [errors, setErrors] = useState({})
//   const [formFields, setFormFields] = useState({
//     name: "",
//     manufacturer: "",
//     model: "",
//     owner_manual: "",
//     description: "",
//     year_built: "",
//     purchased_from: "",
//     image: "",
//     purchase_date: "",
//     purchase_receipt: "",
//     purchase_price: "",
//     operating_video: "",
//     URL: "",
//     warranty: ""
//   })

//   const [shouldRedirect, setShouldRedirect] = useState({
//     redirect: false,
//     id: ""
//   })

//   const inputChangeHandler = (event) => {
//     setFormFields({
//       ...formFields,
//       [event.currentTarget.name]: event.currentTarget.value
//     })
//   }

//   const handleFileUpload = (acceptedFiles) => {
//     setFormFields({
//       ...formFields,
//       image: acceptedFiles[0],
//     });
//   };

//   const addNewPossessionFunction = (formFields) => {
//     event.preventDefault()
//     let body = new FormData();

//     if (validforSubmission(formFields)) {
//       fetch(`/api/v1/rooms/${props.match.params.id}/possessions`, {
//         credentials: "same-origin",
//         method: "POST",
//         body: JSON.stringify(formFields),
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//         },
//       })
//         .then((response) => {
//           if (response.ok) {
//             return response;
//           } else {
//             let errorMessage = `${response.status} (${response.statusText})`,
//               error = new Error(errorMessage);
//             throw error;
//           }
//         })
//         .then((response) => response.json())
//         .then((possession) => {
//           if (!possession.errors) {
//             setRoom({
//               ...room,
//               possessions: [possession, ...room.possessions],
//             });
//           } else if (possession.errors) {
//             setErrors(possession.errors);
//           }
//         })
//         .catch(error => console.error(`Error in fetch: ${error.message}`))
//     }
//   }

//   const validforSubmission = (formFields) => {
//     let submittedErrors = {}
//     const requiredFields = ["name", "manufacturer"]
//     requiredFields.forEach(field => {
//       if (formFields[field].trim() === "") {
//         submittedErrors = {
//           ...submittedErrors,
//           [field]: "is blank"
//         }
//       }
//     })
//     setErrors(submittedErrors)
//     return _.isEmpty(submittedErrors)
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault()
//     let possession = new FormData()
//     possession.append("possession[name]",formFields.name)
//     possession.append("possession[manufacturer]", formFields.manufacturer)
//     possession.append("possession[model]", formFields.model)
//     possession.append("possession[owner_manual]", formFields.owner_manual)
//     possession.append("possession[description]", formFields.description)
//     possession.append("possession[year_built]", formFields.year_built)
//     possession.append("possession[purchased_from]", formFields.purchased_from)
//     possession.append("possession[purchased_from]", formFields.name)
//     possession.append("possession[image]", formFields.image)
//     possession.append("possession[purchase_date]", formFields.purchase_date)
//     possession.append("possession[purchase_receipt]", formFields.purchase_receipt)
//     possession.append("possession[purchase_price]", formFields.purchase_price)
//     possession.append("possession[operating_video]", formFields.operating_video)
//     possession.append("possession[URL]", formFields.URL)
//     possession.append("possession[warranty]", formFields.warranty)
//     })
//   }
//   return (
//       <div className="small-12 medium-8 medium-offset-1 medium-right-offset-1 small-centered">
//       <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />

//           <form className="callout cell " onSubmit={handleSubmit}>
    
//             <label>
//               Possession Name:
//                   <input
//                 name="name"
//                 id="name"
//                 type="text"
//                 onChange={inputChangeHandler}
//                 value={formFields.name}
//               />
//             </label>

//             <Dropzone onDrop={handleFileUpload}>
//               {({ getRootProps, getInputProps }) => (
//                 <div>
//                   <div {...getRootProps()}>
//                     <input {...getInputProps()} />
//                     <div className="cell callout grid-x grid-padding-x">
//                       <div className="cell small-12 medium-6">
//                         <div>
//                           <i className="fas fa-book fa-3x"> </i>
//                           Drag an owner's manual here, or click one on your computer
//                         </div>
//                       </div>
//                       <div className="cell small-12 medium-6">
//                         <div>
//                           <i className="fas fa-image fa-3x"> </i>
//                           Drag an image of the product here, or click on one on your computer
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </Dropzone>
    
//             <label>
//               Manufacturer:
//                   <input
//                 name="manufacturer"
//                 id="manufacturer"
//                 type="text"
//                 onChange={inputChangeHandler}
//                 value={formFields.manufacturer}
//               />
//             </label>
    
//             <label>
//               Model:
//                   <input
//                 name="model"
//                 id="model"
//                 type="text"
//                 onChange={inputChangeHandler}
//                 value={formFields.model}
//               />
//             </label>
    
//             <label>
//               Owner's Manual:
//                   <input
//                 name="owner_manual"
//                 id="owner_manual"
//                 type="text"
//                 onChange={inputChangeHandler}
//                 value={formFields.owner_manual}
//               />
//             </label>
    
//             <label>
//               Description of this possession:
//                   <input
//                 name="description"
//                 id="description"
//                 type="text"
//                 onChange={inputChangeHandler}
//                 value={formFields.description}
//               />
//             </label>
    
//             <label>
//               Image:
//                   <input
//                 name="image"
//                 id="image"
//                 type="text"
//                 onChange={inputChangeHandler}
//                 value={formFields.image}
//               />
//             </label>
    
//             <div className="button-group">
//               <input className="button" type="submit" value="Submit" />
//             </div>
//           </form>
//         </div>
//       // </div>
//   )
// }

// export default PossessionNewForm
