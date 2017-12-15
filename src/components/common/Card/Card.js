// @flow
import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.125);
`;

type Props = {
  children: React.Node,
};

const Card = ({ children }: Props) => <Wrapper>{children}</Wrapper>;

export default Card;
