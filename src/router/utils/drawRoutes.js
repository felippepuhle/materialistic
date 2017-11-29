import * as React from 'react';
import { Route } from 'react-router-dom';

const drawRoutes = routes =>
  routes.map((route, index) => (
    <Route
      key={index}
      path={route.path}
      exact={route.exact}
      render={props => <route.component {...props} routes={route.routes} />}
    />
  ));

export default drawRoutes;
