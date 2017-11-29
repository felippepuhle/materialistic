// @flow
import * as React from 'react';

import AppRouter from './router/AppRouter';

type Props = {};

export default class App extends React.PureComponent<Props> {
  render() {
    return (
      <AppRouter />
    );
  }
}
