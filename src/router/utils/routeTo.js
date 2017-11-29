// @flow
import routes from '../routes';

import type { RouteType, RouteParamsType } from './types';

const findPathByRouteName = (name: string, routes: Array<RouteType>): ?string =>
  routes
    .map(subroute => {
      if (subroute.name === name) {
        return subroute.path;
      }

      if (subroute.routes) {
        return findPathByRouteName(name, subroute.routes);
      }
    })
    .filter(subroute => subroute !== undefined)
    .shift();

const replaceParams = (path: string, params: RouteParamsType): string => {
  Object.keys(params).map(key => {
    path = path.replace(':' + key, params[key]);
  });

  return path;
};

const routeTo = (name: string, params: RouteParamsType = {}): ?string => {
  const path = findPathByRouteName(name, routes);
  if (!path) {
    return null;
  }

  return replaceParams(path, params);
};

export default routeTo;
