// App.js
import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import RealtorsIndexContainer from "./RealtorsIndexContainer"
import RealtorShowContainer from "./RealtorShowContainer"
import ResidencesIndexContainer from "./ResidencesIndexContainer"
import ResidenceShowContainer from "./ResidenceShowContainer"
import RoomsIndexContainer from "./RoomsIndexContainer"
import RoomShowContainer from "./RoomShowContainer"
import PossessionPage from "./PossessionPage"
import PossessionNewForm from "./PossessionNewForm"
import AboutPage from "./AboutPage"

export const App = (props) => {
  return (
    <div className="pagestyle">
      <BrowserRouter>
        <Switch>
          {/* 1st is not in routes.rb  */}
          <Route exact path="/" component={RoomsIndexContainer} />

          <Route exact path="/realtors" component={RealtorsIndexContainer} />
          <Route exact path="/realtors/:id" component={RealtorShowContainer} />
          <Route exact path="/residences" component={ResidencesIndexContainer} />
          <Route exact path="/residences/:id" component={ResidenceShowContainer} />
          <Route exact path="/rooms" component={RoomsIndexContainer} />
          <Route exact path="/rooms/:id" component={RoomShowContainer} />
          <Route exact path="/possessions/:id" component={PossessionPage} /> 
          <Route exact path="/about" component={AboutPage} />

          {/* not in routes.rb  */}
          <Route exact path="/rooms/:id/possessions/new" component={PossessionNewForm} />

        </Switch>
      </BrowserRouter>

    </div>
  )
}

export default App
