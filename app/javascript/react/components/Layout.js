import React from "react";
import { Route, Switch } from "react-router-dom";

import RealtorPage from "./realtors/RealtorPage"
import RealtorsIndexForDemo from "./realtors/RealtorsIndexForDemo"

import ResidencesIndexForDemo from "./residences/ResidencesIndexForDemo"
import ResidenceNewForm from "./residences/ResidenceNewForm"
import ResidencePage from "./residences/ResidencePage"

import RoomPage from "./rooms/RoomPage"
import RoomsIndexForDemo from "./rooms/RoomsIndexForDemo"
import RoomNewForm from "./rooms/RoomNewForm"

import PossessionPage from "./possessions/PossessionPage"
import PossessionNewForm from "./possessions/PossessionNewForm"

import ActivitiesContainer from "./activities/ActivitiesContainer"
// information and layout pages 

import AboutPage from "./AboutPage"
import Splash from "./Splash"
import News from "./News"
import FAQ from "./FAQ"
import PleaseSignIn from "./PleaseSignIn"
import NotFound from "./NotFound"
import ProvideThis from "./ProvideThis"
import Sidebar from "./Sidebar"

const Layout = (props) => {
  return (
    <div className="grid-y medium-grid-frame">
      <div className="cell medium-auto medium-cell-block-container">
        <div className="grid-x" style={{ height: "100%" }}>
          <Sidebar classes="cell small-2 sidebar" />
          <div className="cell auto web-site-meat medium-cell-block-y">
            <Switch>
              <Route exact path="/" component={Splash} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/providethis" component={ProvideThis} />
              <Route exact path="/pleasesignin" component={PleaseSignIn} />
              <Route exact path="/demo" component={RoomsIndexForDemo} />
              <Route exact path="/splash" component={Splash} />
              <Route exact path="/news" component={News} />
              <Route exact path="/activities" component={ActivitiesContainer} />
              <Route exact path="/faq" component={FAQ} />
              <Route exact path="/notFound" component={NotFound} />

              <Route exact path="/realtors" component={RealtorsIndexForDemo} />
              <Route exact path="/realtors/:id" component={RealtorPage} />
              <Route exact path="/realtors/:id/residences/new" component={ResidenceNewForm} />

              <Route exact path="/residences" component={ResidencesIndexForDemo} />
              <Route exact path="/residences/new" component={ResidenceNewForm} />
              <Route exact path="/residences/:id" component={ResidencePage} />
              <Route exact path="/residences/:id/rooms/new" component={RoomNewForm} />

              <Route exact path="/rooms" component={RoomsIndexForDemo} />
              <Route exact path="/rooms/:id" component={RoomPage} />
              <Route exact path="/rooms/:id/possessions/new" component={PossessionNewForm} />

              <Route exact path="/possessions/:id" component={PossessionPage} /> 
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
