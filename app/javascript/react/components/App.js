// App.js
import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"

import ResidencesIndexContainer from "./ResidencesIndexContainer"
import ResidenceShowContainer from "./ResidenceShowContainer"
import RoomsIndexContainer from "./RoomsIndexContainer"
import RoomShowContainer from "./RoomShowContainer"
import PossessionShowContainer from "./PossessionShowContainer"
import PossessionNewForm from "./PossessionNewForm"
import AboutPage from "./AboutPage"


export const App = (props) => {
  return (
    <div className="pagestyle">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={RoomsIndexContainer} />
          <Route exact path="/residences" component={ResidencesIndexContainer} />
          <Route exact path="/residences/:id" component={ResidenceShowContainer} />
          <Route exact path="/rooms" component={RoomsIndexContainer} />
          <Route exact path="/rooms/:id" component={RoomShowContainer} />
          <Route exact path="/possessions/:id" component={PossessionShowContainer} /> 
          <Route exact path="/rooms/:id/possessions/new" component={PossessionNewForm} />
          <Route exact path="/about" component={AboutPage} />
        </Switch>
      </BrowserRouter>

    </div>
  )
}

export default App
