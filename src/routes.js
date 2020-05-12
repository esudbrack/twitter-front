import React from "react";
import { Route, Switch } from "react-router-dom";
import Signin from "./pages/Signin";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Signin} />
    {/* <Route path="/register" component={Register} />
    <Route path="/home" component={Home} /> */}
  </Switch>
);

export default Routes;
