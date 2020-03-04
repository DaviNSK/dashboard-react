import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "./../pages/Dashboard";
import Settings from "../pages/Settings";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/settings" component={Settings} />
  </Switch>
);

export default Routes;
