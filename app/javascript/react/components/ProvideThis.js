import React from "react";
import RoomsIndexForDemo from "./rooms/RoomsIndexForDemo"

const ProvideThis = (props) => {
  return (
    <div>
      <div>
        <br></br>{/* spacer */}
      </div>

      <div className="cell small-offset-1 medium-offset-3 ">
        <div className="grid-x grid-margin-y text-center">
          <div className="callout cell small-10 medium-6 box-shadow">
            <h2 className="cell"> Realtors, Be Remembered</h2>
            <h4 className="cell"> If you are a realtor, you can provide this to your clients and prospects. </h4>
            <br></br>
          </div>
        </div>
      </div>

      <div className="cell text-center">
        <div>
          <br></br>

          Example:
        </div>
        <RoomsIndexForDemo />
      </div>
    </div>
  )
}

export default ProvideThis;