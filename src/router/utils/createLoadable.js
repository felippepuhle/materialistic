// @flow
import * as React from 'react';
import Loadable from 'react-loadable';

const createLoadable = (component: Promise<React.Element<*>>): React.Element<*> =>
  Loadable({
    loader: () => component,
    loading() {
      return null;
    },
  });

export default createLoadable;