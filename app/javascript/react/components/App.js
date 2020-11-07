// App.js
import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"

import RoomsIndexPage from "./RoomsIndexPage"
import AboutPage from "./AboutPage"
import RoomShowContainer from "./RoomShowContainer"
import PossessionShowContainer from "./PossessionShowContainer"
// import RoomFormContainer from "./RoomFormContainer"

export const App = (props) => {
  return (
    <div className="pagestyle">
      <div className="text-center">
        <h3>Owner's Manual for 315 College Farm Rd #6, Waltham, MA</h3>
      </div>

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={RoomsIndexPage} />
          <Route exact path="/rooms" component={RoomsIndexPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/rooms/:id" component={RoomShowContainer} />
          <Route exact path="/possessions/:id" component={PossessionShowContainer} /> 
          {/* <Route exact path="/rooms/new" component={RoomFormContainer} /> */}
        </Switch>
      </BrowserRouter>

    </div>
  )
}

export default App
