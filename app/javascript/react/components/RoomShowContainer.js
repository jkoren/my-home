// RoomShowContainer.js
import React, { useState, useEffect } from "react"
import RoomShow from "./RoomShow"
// import ReviewList from "./ReviewList"
// import _ from "lodash" 
// import ReviewErrorList from "./ReviewErrorList"
// import ReviewForm from "./ReviewForm"

const RoomShowContainer = (props) => {
  const [room, setRoom] = useState({})
  // const [errors, setErrors] = useState({})
  // const [error, setError] = useState(null)
  // const [reviews, setReviews] = useState(null)
  const id = props.match.params.id 

  useEffect(() => {
    fetch(`/api/v1/rooms/${id}`, {
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
        // setReviews(responseBody.reviews)
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`))
  }, [])
  
  const validforSubmission = (submittedReview) => {
    let submittedErrors = {}
    const requiredFields = ["rating"]
    requiredFields.forEach(field => {
      if (submittedReview[field].trim() === "") {
        submittedErrors = {
          ...submittedErrors,
          [field]: "is blank"
        }
      }
    })
    setErrors(submittedErrors)
    return _.isEmpty(submittedErrors)
  }
  // const addNewReview = (newReviewObject) => {
    //   event.preventDefault() 
    //   if (validforSubmission(newReviewObject)) {
      //     fetch(`/api/v1/rooms/${id}/reviews.json`, {
        //       method: "POST",
        //       body: JSON.stringify(newReviewObject),
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
                        //         setReviews([
                          //           ...reviews,

  //           body
  //         ])
  //       }
  //     })
  //     .catch(error => console.error(`Error in fetch: ${error.message}`))
  //   }
  // }
  return (
    <div>
      <RoomShow
        id={room.id}
        name={room.name}
        description={room.description}
        // room_image={room.image}
      />
      {/* <h2 className="review-label-header">Reviews:</h2>
      <ReviewList
        roomReviews={reviews}
      />
      <ReviewErrorList errors={errors} 
      error={error}/>
      <ReviewForm addNewReviewFunction={addNewReview} /> */}
    </div>
  )
}

export default RoomShowContainer 