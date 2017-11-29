// @flow
import * as React from 'react';
import { Route } from 'react-router-dom';

import type { RouteType } from './types';

const drawRoutes = (routes: Array<RouteType>): Array<React.Element<*>> =>
 routes.map((route, index) => (
    <Route
      key={index}
      path={route.path}
      exact={route.exact}
      render={props => <route.component {...props} routes={route.routes} />}
    />
  ));

export default drawRoutes;