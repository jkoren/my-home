import React from "react";
import { Route, Switch } from "react-router-dom";
import RealtorsIndexforDemo from "./RealtorsIndexForDemo";
import RealtorPage from "./RealtorPage"
import RealtorsIndexForDemo from "./RealtorsIndexForDemo"
import ResidencesIndexForDemo from "./ResidencesIndexForDemo"
import RoomsIndexForDemo from "./RoomsIndexForDemo"
import ResidencePage from "./ResidencePage"
import RoomPage from "./RoomPage"
import PossessionPage from "./PossessionPage"
import RoomNewForm from "./RoomNewForm"
import PossessionNewForm from "./PossessionNewForm"
import ResidenceNewForm from "./ResidenceNewForm"
import AboutPage from "./AboutPage"
import Navbar from "./Navbar"

const Layout = (props) => {
  return (
    <div className="grid-y medium-grid-frame">
      <div className="cell medium-auto medium-cell-block-container">
        <div className="grid-x" style={{ height: "100%" }}>
          <Navbar classes="cell small-2 navbar" />
          <div className="cell auto web-site-meat medium-cell-block-y">
            <div className="grid-x" style={{ height: "100%" }}>
              <Switch>
                <Route exact path="/" component={AboutPage} />
                <Route exact path="/about" component={AboutPage} />
                <Route exact path="/demo" component={RoomsIndexForDemo} />

                <Route exact path="/realtors" component={RealtorsIndexForDemo} />
                <Route exact path="/realtors/:id" component={RealtorPage} />
                <Route exact path="/realtors/:id/residences/new" component={ResidenceNewForm} />

                <Route exact path="/residences" component={ResidencesIndexForDemo} />
                <Route exact path="/residences/:id" component={ResidencePage} />
                <Route exact path="/residences/:id/rooms/new" component={RoomNewForm} />

                <Route exact path="/rooms" component={RoomsIndexForDemo} />
                <Route exact path="/rooms/:id" component={RoomPage} />
                <Route exact path="/rooms/:id/possessions/new" component={PossessionNewForm} />

                <Route exact path="/possessions/:id" component={PossessionPage} /> 
              </Switch>
              <div className="cell small-1 giraffe-neck"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
