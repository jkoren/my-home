import React from "react";
import { Route, Switch } from "react-router-dom";
import RealtorPage from "./realtors/RealtorPage"
import RealtorsIndexForDemo from "./realtors/RealtorsIndexForDemo"
import ResidencesIndexForDemo from "./residences/ResidencesIndexForDemo"
import RoomsIndexForDemo from "./rooms/RoomsIndexForDemo"
import ResidencePage from "./residences/ResidencePage"
import RoomPage from "./rooms/RoomPage"
import PossessionPage from "./possessions/PossessionPage"
import RoomNewForm from "./rooms/RoomNewForm"
import PossessionNewForm from "./possessions/PossessionNewForm"
import PossessionsIndexForNewest from "./possessions/PossessionsIndexForNewest"
import ResidenceNewForm from "./residences/ResidenceNewForm"
import AboutPage from "./AboutPage"
import ProvideThis from "./ProvideThis";
import Sidebar from "./Sidebar"

const Layout = (props) => {
  return (
    <div className="grid-y medium-grid-frame">
      <div className="cell medium-auto medium-cell-block-container">
        <div className="grid-x" style={{ height: "100%" }}>
          <Sidebar classes="cell small-2 sidebar" />
          <div className="cell auto web-site-meat medium-cell-block-y">
            <div className="grid-x" style={{ height: "100%" }}>
              <Switch>
                <Route exact path="/" component={AboutPage} />
                <Route exact path="/about" component={AboutPage} />
                <Route exact path="/providethis" component={ProvideThis} />
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
                <Route exact path="/possessions/newest" component={PossessionsIndexForNewest} /> 
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
