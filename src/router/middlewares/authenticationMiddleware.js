// @flow
import React from 'react';
import { withRouter } from 'react-router-dom';

import routeTo from '../utils/routeTo';
import { isLoggedIn } from '../../utils/auth';

const authenticationMiddleware = (Component: React.Node): React.Node => {
  class AuthenticatedComponent extends React.PureComponent {
    componentWillMount() {
      this.redirectIfNotAuthenticated();
    }

    componentWillReceiveProps() {
      this.redirectIfNotAuthenticated();
    }

    redirectIfNotAuthenticated = async () => {
      if (!isLoggedIn()) {
        this.props.history.push(routeTo('login'));
      }
    };

    render() {
      if (!isLoggedIn()) {
        return null;
      }

      return <Component {...this.props} />;
    }
  }

  return withRouter(AuthenticatedComponent);
};

export default authenticationMiddleware;
