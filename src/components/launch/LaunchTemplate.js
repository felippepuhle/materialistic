// @flow
import * as React from 'react';
import styled from 'styled-components';

import { Card, Logo } from '../common';
import Layout, { Colors } from '../../layout';
import drawRoutes from '../../router/utils/drawRoutes';

import type { RouteType } from '../../router/utils/types';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  background-color: ${Colors.silver};
`;

const Content = styled.div`
  transition: ${Layout.transition};
  position: fixed;
  z-index: 2;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: ${props => (props.initialized ? 'translate(0%, 0%)' : 'translate(0%, 100%)')};
  transform-origin: center center;
`;

const LogoWrapper = styled.div`
  transition: ${Layout.transition};
  transition-delay: 500ms;
  position: relative;
  z-index: 1;
  width: 180px;
  margin-bottom: 10px;
  bottom: ${props => (props.initialized ? '0px' : '-100px')};
`;

const CardWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 300px;
  max-width: 100%;
  min-height: 300px;
`;

const Background = styled.div`
  transition: ${Layout.transition};
  transition-delay: 500ms;
  position: fixed;
  z-index: 1;
  height: ${props => (props.initialized ? '50%' : '0%')};
  right: 0;
  bottom: 0;
  left: 0;
  background: ${Colors.main};
`;

type Props = {
  routes: Array<RouteType>,
};

type State = {
  initialized: boolean,
};

class LaunchTemplate extends React.PureComponent<Props, State> {
  state = {
    initialized: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ initialized: true });
    }, 1000);
  }

  render() {
    const { initialized } = this.state;

    return (
      <Wrapper>
        <Content initialized={initialized}>
          <LogoWrapper initialized={initialized}>
            <Logo />
          </LogoWrapper>

          <CardWrapper>
            <Card>{drawRoutes(this.props.routes)}</Card>
          </CardWrapper>
        </Content>

        <Background initialized={initialized} />
      </Wrapper>
    );
  }
}

export default LaunchTemplate;
