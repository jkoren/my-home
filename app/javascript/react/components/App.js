import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"

import RoomsIndexPage from "./RoomsIndexPage"
import AboutPage from "./AboutPage"
// import RoomsFormContainer from "./RoomsFormContainer"
// import RoomsShowContainer from "./RoomsShowContainer"

export const App = (props) => {
  return (
    <div>
      <div className="text-center">
        <h2>How to operate everything in your house</h2>
      </div>

      <div className="text-center">
        <h4>18 Common St #5, Waltham, MA</h4>
      </div>

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={RoomsIndexPage} />
          <Route exact path="/rooms" component={RoomsIndexPage} />
          <Route exact path="/about" component={AboutPage} />
          {/* <Route exact path="/rooms/new" component={RoomsFormContainer} /> */}
          {/* <Route exact path="/rooms/:id" component={RoomShowContainer} /> */}
        </Switch>
      </BrowserRouter>

    </div>

    
  )
}

export default App
