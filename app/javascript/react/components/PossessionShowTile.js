//PossessionShowTile.js
import React, { useEffect, useState } from "react"
import YelpApplianceRepairProIndexTile from "./YelpApplianceRepairProIndexTile"



const PossessionShowTile = (props) => {
  const [professionals, setProfessionals] = useState([])

  // find the Repair Professionals to service this equipment
 
  useEffect(() => {

    // using rooms as a proxy for professionals
    fetch("/api/v1/rooms", {
      credentials: "same-origin"
    })
      .then(response => {
        if (response.ok) {
          return response
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage)
          throw error
        }
      })
      .then(response => response.json())
      .then(body => {
        setProfessionals(body)
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
          
          //without city and state in search
          // fetch("https://yelpapiserg-osipchukv1.p.rapidapi.com/getBusinesses", {
          //   "method": "POST",
          //   "headers": {
          //     "content-type": "application/x-www-form-urlencoded",
          //     "x-rapidapi-key": "4061fa49d3msh838bc4842eba1b8p10285ajsnc22254c8efa5",
          //     "x-rapidapi-host": "YelpAPIserg-osipchukV1.p.rapidapi.com"
          //   },
          //   "body": {
          //     "accessToken": "SZg3IbePsFZ-z5h0qSnmeCcUPeP5q-F-j3SgLAZKjmKmU8JLmkkw9OOREb-oqkHjw1J8iRJghFI-fK_iJazm7Tkng8WluhmpsfdSAUgKNOWwEk-nlThHjvSHC5aZX3Yx"
          //   }
          // })

          // with City and State in search
          // fetch("https://yelpapiserg-osipchukv1.p.rapidapi.com/getBusinesses", {
          //   "method": "POST",
          //   "headers": {
          //     "content-type": "application/x-www-form-urlencoded",
          //     "x-rapidapi-key": "4061fa49d3msh838bc4842eba1b8p10285ajsnc22254c8efa5",
          //     "x-rapidapi-host": "YelpAPIserg-osipchukV1.p.rapidapi.com"
          //   },
          //   "body": {
          //     "term": "Appliances & Repair",
          //     "accessToken": "SZg3IbePsFZ-z5h0qSnmeCcUPeP5q-F-j3SgLAZKjmKmU8JLmkkw9OOREb-oqkHjw1J8iRJghFI-fK_iJazm7Tkng8WluhmpsfdSAUgKNOWwEk-nlThHjvSHC5aZX3Yx",
          //     "locale": "Waltham, MA"
          //   }
          // })
          .then(response => {
            debugger
            console.log(response);
          })
          .catch(err => {
            console.error(err);
          });
  }, [])

  let professionalListTiles = professionals.map((professionalObject) => {
    return <YelpApplianceRepairProIndexTile
      key={professionalObject.id}
      data={professionalObject}
    />
  })

  return (
    <div className="grid-x grid-padding-x">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />
      <div className="cell ">
        <h4>{props.data.name}</h4>
        <h5>{props.data.manufacturer} {props.data.model}</h5>
      </div> 

        <div className="cell small-12 medium-3">
          <img src={props.data.image} alt="missing picture" width="450" />
        </div>

        {/* <div className="cell small-12 medium-3">
          <img src={props.data.image.url} alt="missing picture" width="450" />
        </div> */}

        <div className="cell small-12 medium-6 text-left">
          <h5>{props.data.description}</h5>
          
          <div className="grid-x grid-margin-x">
            <div className="small-12 medium-6 text-center">
              <div>
                 <a href={props.data.owners_manual}> 
                    <h5>Owner's Manual</h5>
                    <i className="fa fa-book fa-4x"></i>
                  </a>
              </div>
            </div>
            <div className="small-12 medium-6 text-center">
              <div>
                
                  <a href={props.data.URL}>
                    <h5>Manufacturer Site</h5>
                    <i className="fa fa-desktop fa-4x"></i>
                    </a>
                
              </div>
            </div>
          </div>


        <div className="grid-x grid-margin-x">
          <div className="small-12 medium-6 text-center">
            <div>
              
                <a href={props.data.operating_video}>
                  <h5>Operating Video</h5>
                  <i className="fab fa-youtube fa-4x"></i>
                </a>
              
            </div>
          </div>
          <div className="small-12 medium-6 text-center">
            <div>
              
                <a href={props.data.purchase_receipt}>
                  <h5>Purchase Receipt</h5>
                    <i className="fa fa-file-alt fa-4x"></i>
                </a>
              
            </div>
          </div>
        </div>


        <div className="grid-x grid-margin-x">
          <div className="small-12 medium-6 text-center">
            <div>
              
                <a href={props.data.warranty}>
                  <h5>Warranty Document</h5>
                  <i className="fa fa-file-alt fa-4x"></i>
                </a>
              
            </div>
          </div>
          <div className="small-12 medium-6 text-center">
            <div>
              <h5>
                <a>

                </a>
              </h5>
            </div>
          </div>
        </div>


        </div> 

        <div className="cell small-12 medium-3">
          <i className="fas fa-tools fa-3x"></i>
          Repair experts near you:
          {professionalListTiles} 
        </div>
      </div>

  )
}

export default PossessionShowTile