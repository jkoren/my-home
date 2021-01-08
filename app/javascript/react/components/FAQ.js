import React from "react";
import PossessionsNewestContainer from "./possessions/PossessionsNewestContainer"
import { Link } from 'react-router-dom'

const FAQ = (props) => {
  
  return (
    <>
      {/* <div className="cell medium-offset-1 "> */}
        <div className="grid-x">
          <div className="cell medium-1">
            {/* spacer */}
          </div>

          <div className="callout cell medium-10 box-shadow text-left">
            <h5 className="cell"> Frequently Asked Questions </h5>
          </div> 
        </div>

        <div className="grid-x text-left">
          <div className="cell medium-1">
            {/* spacer */}
          </div>

            <div className="cell medium-10 text-left">
              <h5><b>Is my address required?</b></h5>
              <h5>No. No identifying information is required except your email. A zip code however will help you to get location specific recommendations. Photos look nice but are not required.</h5>
              <br></br>
              <h5><b>How much information do I have to enter about a possession?</b> </h5>
              <h5>The only requirement is a name and manufacturer.  Of course it is more useful to enter a photo, manufacturer web site, owners manual, and so on.  Future versions will hopefully be able to look up this information from a database. I estimate it takes about 7 minutes to enter a possession completely. </h5>
              <br></br>
              <h5><b>Can I use this on my phone, tablet or computer?</b></h5>
              <h5>Yes.</h5>
              <br></br>
              <h5><b>How do I use this on my phone or tablet?</b></h5>
              <h5>For mobile devices, use Safari, Chrome or any other mobile browser.</h5>
              <br></br>
              <h5><b>Should attachments be mobile device photos, or jpg, png or pdf files?</b></h5>
              <h5>Any of these formats can be uploaded.</h5>
            </div>

        </div>
      {/* </div> */}
    </>
  )
}

export default FAQ;
