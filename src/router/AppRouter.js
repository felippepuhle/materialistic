import * as React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import drawRoutes from './utils/drawRoutes';
import routes from './routes';

class AppRouter extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Switch>{drawRoutes(routes)}</Switch>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
