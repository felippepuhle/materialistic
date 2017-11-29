// @flow
import routes from '../routes';

import type { RouteType, RouteParamsType } from './types';

const findRouteByName = (name: string, routes: Array<RouteType>): RouteType =>
  routes
    .map(subroute => {
      if (subroute.name === name) {
        return subroute.path;
      }

      if (subroute.routes) {
        return findRouteByName(name, subroute.routes);
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

const routeTo = (name: string, params: RouteParamsType = {}): string => {
  return replaceParams(findRouteByName(name, routes), params);
}

export default routeTo;