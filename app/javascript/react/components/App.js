// App.js
import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"

import RoomsIndexContainer from "./RoomsIndexContainer"
import AboutPage from "./AboutPage"
import RoomShowContainer from "./RoomShowContainer"
import PossessionShowContainer from "./PossessionShowContainer"
import ResidencesIndexContainer from "./ResidencesIndexContainer"
import ResidenceShowContainer from "./ResidenceShowContainer"

// import RoomFormContainer from "./RoomFormContainer"

export const App = (props) => {
  return (
    <div className="pagestyle">
      {/* <div className="text-center">
        <h3>Owner's Manual for 315 College Farm Rd #6, Waltham, MA</h3>
      </div> */}

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={RoomsIndexContainer} />
          <Route exact path="/residences" component={ResidencesIndexContainer} />
          <Route exact path="/residences/:id" component={ResidenceShowContainer} />
          <Route exact path="/rooms" component={RoomsIndexContainer} />
          <Route exact path="/rooms/:id" component={RoomShowContainer} />
          <Route exact path="/possessions/:id" component={PossessionShowContainer} /> 
          {/* <Route exact path="/rooms/new" component={RoomFormContainer} /> */}
          <Route exact path="/about" component={AboutPage} />
        </Switch>
      </BrowserRouter>

    </div>
  )
}

export default App
