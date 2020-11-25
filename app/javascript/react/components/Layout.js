import React from "react";
import { Route, Switch } from "react-router-dom";
import RealtorsIndexforDemo from "./RealtorsIndexForDemo";
import RealtorsIndexContainer from "./RealtorsIndexContainer"
import RealtorShowContainer from "./RealtorShowContainer"
import RealtorsIndexForDemo from "./RealtorsIndexForDemo"
import ResidencesIndexForDemo from "./ResidencesIndexForDemo"
import RoomsIndexForDemo from "./RoomsIndexForDemo"
import ResidenceShowContainer from "./ResidenceShowContainer"
import RoomShowContainer from "./RoomShowContainer"
import PossessionPage from "./PossessionPage"
import RoomNewForm from "./RoomNewForm"
import PossessionNewForm from "./PossessionNewForm"
import ResidenceNewForm from "./ResidenceNewForm"
import AboutPage from "./AboutPage"
import Navbar from "./Navbar";

const Layout = (props) => {
  return (
    <div className="grid-y medium-grid-frame">
      <div className="cell medium-auto medium-cell-block-container">
        <div className="grid-x" style={{ height: "100%" }}>
          <Navbar classes="cell small-2 navbar" />
          <div className="cell auto medium-cell-block-y">
            <div className="grid-x" style={{ height: "100%" }}>
              <Switch>
                <Route exact path="/" component={RoomsIndexForDemo} />
                <Route exact path="/about" component={AboutPage} />

                <Route exact path="/realtors" component={RealtorsIndexForDemo} />
                <Route exact path="/realtors/:id" component={RealtorShowContainer} />
                <Route exact path="/realtors/:id/residences/new" component={ResidenceNewForm} />

                <Route exact path="/residences" component={ResidencesIndexForDemo} />
                <Route exact path="/residences/:id" component={ResidenceShowContainer} />
                <Route exact path="/residences/:id/rooms/new" component={RoomNewForm} />

                <Route exact path="/rooms" component={RoomsIndexForDemo} />
                <Route exact path="/rooms/:id" component={RoomShowContainer} />
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
