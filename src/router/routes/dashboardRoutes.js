// @flow
import buildPath from '../utils/buildPath';
import createLoadable from '../utils/createLoadable';

// Middlewares
import authenticationMiddleware from '../middlewares/authenticationMiddleware';

// Template
import DashboardTemplate from '../../components/dashboard/DashboardTemplate';

const dashboardRoutes = {
  path: buildPath(),
  component: authenticationMiddleware(DashboardTemplate),
  routes: [
    {
      name: 'dashboard',
      path: buildPath(),
      component: createLoadable(import('../../components/home/Home')),
      exact: true,
    },
  ],
};

export default dashboardRoutes;
