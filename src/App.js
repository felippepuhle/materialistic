import * as React from 'react';
import { injectGlobal } from 'styled-components';

import AppRouter from './router/AppRouter';

injectGlobal`
  html, body, #root {
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  *, *:before, *:after {
    box-sizing: border-box;
    outline: none;
  }
`;

export default class App extends React.PureComponent {
  render() {
    return <AppRouter />;
  }
}
