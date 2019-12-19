import React from "react";
import { Route } from "react-router-dom";
export default function AppRoute({
  layout: Layout,
  routeComponent: Component,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}
