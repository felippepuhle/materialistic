// @flow
import * as React from 'react';
import styled from 'styled-components';

import { Card, Logo } from '../common';
import { Colors } from '../../layout';
import drawRoutes from '../../router/utils/drawRoutes';

import type { RouteType } from '../../router/utils/types';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  background-color: ${Colors.snow};
`;

const Container = styled.div`
  transition: all 1000ms cubic-bezier(0.2, 1, 0.22, 1);
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

const Header = styled.div`
  transition: all 1000ms cubic-bezier(0.2, 1, 0.22, 1);
  transition-delay: 500ms;
  position: relative;
  z-index: 1;
  width: 180px;
  margin-bottom: 10px;
  bottom: ${props => (props.initialized ? '0px' : '-100px')};
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  width: 300px;
  max-width: 100%;
`;

const Footer = styled.div`
  transition: all 1000ms linear;
  transition-delay: 300ms;
  position: relative;
  z-index: 1;
  opacity: ${props => (props.initialized ? 1 : 0)};
  color: #fff;
  margin-top: 15px;
`;

const FooterLink = styled.a`
  margin: 0px 5px;
  font-size: 13px;
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Background = styled.div`
  transition: all 1000ms cubic-bezier(0.2, 1, 0.22, 1);
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
        <Container initialized={initialized}>
          <Header initialized={initialized}>
            <Logo />
          </Header>

          <Content>
            <Card>{drawRoutes(this.props.routes)}</Card>
          </Content>

          <Footer initialized={initialized}>
            <FooterLink href="#">Suporte</FooterLink>
            -
            <FooterLink href="#">Termos de uso</FooterLink>
            -
            <FooterLink href="#">Política de privacidade</FooterLink>
          </Footer>
        </Container>

        <Background initialized={initialized} />
      </Wrapper>
    );
  }
}

export default LaunchTemplate;
