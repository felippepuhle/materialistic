// @flow
import * as React from 'react';

export type RouteType = {
  name?: string,
  path: string,
  component: React.Node,
  exact?: boolean,
  routes?: Array<RouteType>,
};

export type RouteParamsType = {
  [string]: string,
};
