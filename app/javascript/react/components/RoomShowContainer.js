// RoomShowContainer.js
import React, { useState, useEffect } from "react"
import RoomShowTile from "./RoomShowTile"
import PossessionsIndexPage from "./PossessionsIndexPage"
// import _ from "lodash" 
// import PossessionErrorList from "./PossessionErrorList"
// import PossessionForm from "./PossessionForm"

const RoomShowContainer = (props) => {
  const [room, setRoom] = useState({})
  const [possessions, setPossessions] = useState(null)
  // const [errors, setErrors] = useState({})
  // const [error, setError] = useState(null)
  const id = props.match.params.id 
  useEffect(() => {
    fetch(`/api/v1/possessions/${id}`, {
      credentials: "same-origin"
    })
      .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
      })
      .then((responseBody) => {
        setRoom(responseBody.room)
        setPossessions(responseBody.possessions)
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`))
  }, [])
  // const validforSubmission = (submittedPossession) => {
  //   let submittedErrors = {}
  //   const requiredFields = ["rating"]
  //   requiredFields.forEach(field => {
  //     if (submittedPossession[field].trim() === "") {
  //       submittedErrors = {
  //         ...submittedErrors,
  //         [field]: "is blank"
  //       }
  //     }
  //   })
  //   setErrors(submittedErrors)
  //   return _.isEmpty(submittedErrors)
  // }
  // const addNewPossession = (newPossessionObject) => {
    //   event.preventDefault() 
    //   if (validforSubmission(newPossessionObject)) {
      //     fetch(`/api/v1/rooms/${id}/possessions.json`, {
        //       method: "POST",
        //       body: JSON.stringify(newPossessionObject),
        //       credentials: "same-origin",
        //       headers: {
          //         'Accept': 'application/json',
          //         'Content-Type': 'application/json'
          //       }
          //     })
          //     .then(response => response.json())
          //     .then(body => {
            //       if (body.errors) {
              //         const requiredFields = ["rating"]
              //         requiredFields.forEach(field => { 
                //           if (body.errors[field] !== undefined) {
                  //             setErrors({
                    //               ...errors,
                    //               [field]: body.errors[field][0]
                    //             })
                    //           }
                    //         })
                    //       }else if(body.error){
                      //         setError(body.error[0])
                      //       }else {
                        //         setPossessions([
                          //           ...possessions,

  //           body
  //         ])
  //       }
  //     })
  //     .catch(error => console.error(`Error in fetch: ${error.message}`))
  //   }
  // }
  return (
    <div>
      <RoomShowTile
        id={room.id}
        name={room.name}
        description={room.description}
      />
      <PossessionsIndexPage
        possessions={possessions}
      />
      {/* <PossessionErrorList errors={errors} 
      error={error}/>
      <PossessionForm addNewPossessionFunction={addNewPossession} /> */}
    </div>
  )
}

export default RoomShowContainer 