import React from "react";
import { Switch } from "react-router-dom";
import AppRoute from "./appRoute";
import Layout from "../components/layout";

import FeedbackForm from "../containers/feedback";
import Feedback from "../containers/feedback/feedback";

export default function Routes() {
  return (
    <Switch>
      <AppRoute exact path="/" routeComponent={FeedbackForm} layout={Layout} />
      <AppRoute
        exact
        path="/feedback/:id"
        routeComponent={Feedback}
        layout={Layout}
      />
    </Switch>
  );
}
