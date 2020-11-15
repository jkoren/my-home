//PossessionShowTile.js
import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";


const PossessionShowTile = (props) => {
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const [possession, setPossession] = useState({
    id: null,
    name: "",
    manufacturer: "",
    model: "",
    operating_video: "",
    image: null,
    aws_image: "",
    owners_manual: "",
    URL: "",
    purchase_receipt: ""
  });

  // const [voteErrors, setVoteErrors] = useState({
  //   message: "",
  //   reivewId: null,
  // });

  const [errors, setErrors] = useState("");
debugger
  const id = props.match.params.id;
  let reviewHeader = null;
  let deleteButtonDiv = null;

  // const handleVoteSubmit = (reviewId, voteChoice) => {
  //   const votePayLoad = {
  //     review_id: reviewId,
  //     vote_choice: voteChoice,
  //   };

  //   fetch("/api/v1/votes", {
  //     credentials: "same-origin",
  //     method: "POST",
  //     body: JSON.stringify(votePayLoad),
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         return response;
  //       } else {
  //         let errorMessage = `${response.status} (${response.statusText})`,
  //           error = new Error(errorMessage);
  //         throw error;
  //       }
  //     })
  //     .then((response) => response.json())
  //     .then((body) => {
  //       if (body.vote && body.review) {
  //         let reviewIndex = possession.reviews.findIndex(
  //           (review) => review.id === body.review.id
  //         );

  //         let tempReviews = [...possession.reviews];
  //         tempReviews.splice(reviewIndex, 1, body.review);

  //         setPossession({
  //           ...possession,
  //           reviews: tempReviews,
  //         });
  //       } else if (body.errors) {
  //         setVoteErrors({
  //           message: body.errors,
  //           reviewId: body.reviewId,
  //         });
  //       }
  //     })
  //     .catch((error) => console.error(`Error in fetch: ${error.message}`));
  // };

  useEffect(() => {
    fetch(`/api/v1/possessions/${id}`)
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then((response) => response.json())
      .then((body) => {
        setPossession(body);
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  }, []);

  // const addNewReview = (formPayLoad) => {
  //   fetch(`/api/v1/possessions/${id}/reviews`, {
  //     credentials: "same-origin",
  //     method: "POST",
  //     body: JSON.stringify(formPayLoad),
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         return response;
  //       } else {
  //         let errorMessage = `${response.status} (${response.statusText})`,
  //           error = new Error(errorMessage);
  //         throw error;
  //       }
  //     })
  //     .then((response) => response.json())
  //     .then((review) => {
  //       if (!review.errors) {
  //         setPossession({
  //           ...possession,
  //           reviews: [review, ...possession.reviews],
  //         });
  //       } else if (review.errors) {
  //         setErrors(review.errors);
  //       }
  //     })
  //     .catch((error) => console.error(`Error in fetch: ${error.message}`));
  // };

  // const editReview = (message) => {
  //   let reviewId = message.id;
  //   let payload = message.review;
  //   fetch(`/api/v1/possessions/${id}/reviews/${reviewId}`, {
  //     credentials: "same-origin",
  //     method: "PATCH",
  //     body: JSON.stringify(payload),
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         return response;
  //       } else {
  //         let errorMessage = `${response.status} (${response.statusText})`,
  //           error = new Error(errorMessage);
  //         throw error;
  //       }
  //     })
  //     .then((response) => response.json())
  //     .then((updatedReview) => {
  //       if (!updatedReview.errors) {
  //         let reviewIndex = possession.reviews.findIndex(
  //           (review) => review.id === updatedReview.id
  //         );

  //         let tempReviews = [...possession.reviews];
  //         tempReviews.splice(reviewIndex, 1, updatedReview);

  //         setPossession({
  //           ...possession,
  //           reviews: tempReviews,
  //         });
  //       } else if (review.errors) {
  //         setErrors(review.errors);
  //       }
  //     })
  //     .catch((error) => console.error(`Error in fetch: ${error.message}`));
  // };

  // const deleteReview = (message) => {
  //   let reviewId = message.id;

  //   fetch(`/api/v1/possessions/${id}/reviews/${reviewId}`, {
  //     credentials: "same-origin",
  //     method: "DELETE",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         return response;
  //       } else {
  //         let errorMessage = `${response.status} (${response.statusText})`,
  //           error = new Error(errorMessage);
  //         throw error;
  //       }
  //     })
  //     .then((response) => response.json())
  //     .then((removeReview) => {
  //       if (!removeReview.errors) {
  //         let reviewIndex = possession.reviews.findIndex(
  //           (review) => review.id === removeReview.id
  //         );

  //         let tempReviews = [...possession.reviews];
  //         tempReviews.splice(reviewIndex, 1);

  //         setPossession({
  //           ...possession,
  //           reviews: tempReviews,
  //         });
  //       } else if (review.errors) {
  //         setErrors(review.errors);
  //       }
  //     })
  //     .catch((error) => console.error(`Error in fetch: ${error.message}`));
  // };

  const onDeletePossessionClickHandler = (event) => {
    fetch(`/api/v1/possessions/${id}`, {
      credentials: "same-origin",
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then((response) => response.json())
      .then((removePossession) => {
        if (!removePossession.errors) {
          setShouldRedirect(true);
        }
      })
      .catch((error) => console.error(`Error in fetch: ${error.message}`));
  };

  if (shouldRedirect) {
    return <Redirect to="/" />;
  }

  // if (possession.reviews.length > 0) {
  //   reviewHeader = <h4 className="cell"> Reviews: </h4>;
  // }

  // if (possession.userIsOwner || possession.userIsAdmin) {
    deleteButtonDiv = (
      <div className="grid-x grid-margin-x cell">
        <button
          type="button"
          className="button cell shrink"
          id="delete-review"
          onClick={onDeletePossessionClickHandler}
        >
          Delete Possession
        </button>
      </div>
    );
  // }

  return (
    <div className="cell auto page">
      <div className="grid-x grid-margin-x grid-padding-y">
        {deleteButtonDiv}
        <div className="grid-x align-center cell small-6">
          <img className="cell shrink possession-image" src={possession.aws_image?.url} />
        </div>

        <div className="cell small-6">
          <div className="grid-y grid-padding-y" style={{ height: "100%" }}>
            <h1 className="cell shrink">{possession.name}</h1>
            <h4 className="cell auto">{possession.manufacturer}</h4>
          </div>
        </div>
      </div>

      {/* <ReviewNewForm
        possessionId={id}
        errors={errors}
        addNewReview={addNewReview}
      />
      <hr />
      <div>
        {reviewHeader}
        <ReviewsList
          reviews={possession.reviews}
          handleVoteSubmit={handleVoteSubmit}
          voteErrors={voteErrors}
          editReview={editReview}
          deleteReview={deleteReview}
        />
      </div> */}
      <Link to="/possessions">Back to Herd</Link>
    </div>
  );
};

export default PossessionShowTile;
