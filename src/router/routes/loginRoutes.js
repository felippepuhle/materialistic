// @flow
import buildPath from '../utils/buildPath';
import createLoadable from '../utils/createLoadable';

// Template
import LaunchTemplate from '../../components/launch/LaunchTemplate';

const loginRoutes = {
  path: buildPath('login'),
  component: LaunchTemplate,
  routes: [
    {
      name: 'login',
      path: buildPath('login'),
      component: createLoadable(import('../../components/login/Login')),
      exact: true,
    },
  ],
};

export default loginRoutes;