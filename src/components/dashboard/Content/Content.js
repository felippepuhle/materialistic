// @flow
import * as React from 'react';
import styled from 'styled-components';

import Layout from '../../../layout';

const Wrapper = styled.div`
  padding-left: ${Layout.navbar.width};
  display: flex;
  flex: 1;
`;

const Inner = styled.div`
  padding: ${Layout.spacing};
  display: flex;
  flex: 1;
`;

type Props = {
  children: React.Node,
};

const Content = ({ children }: Props) => (
  <Wrapper>
    <Inner>{children}</Inner>
  </Wrapper>
);

export default Content;
