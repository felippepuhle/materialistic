// @flow
import * as React from 'react';
import styled from 'styled-components';

import Layout from '../../../layout';

const Wrapper = styled.div`
  display: block;
  padding: ${Layout.spacing};
  background-color: #fff;
  border-radius: ${Layout.radius};
  border: 1px solid rgba(0, 0, 0, 0.125);
`;

type Props = {
  children: React.Node,
};

const Card = ({ children }: Props) => <Wrapper>{children}</Wrapper>;

export default Card;
