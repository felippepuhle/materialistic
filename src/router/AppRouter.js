// @flow
import * as React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import drawRoutes from './utils/drawRoutes';
import routes from './routes';

type Props = {};

class AppRouter extends React.PureComponent<Props> {
  render() {
    return (
      <BrowserRouter>
        <Switch>{drawRoutes(routes)}</Switch>
      </BrowserRouter>
    );
  }
}

export default AppRouter;