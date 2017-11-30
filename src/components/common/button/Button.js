// @flow
import * as React from 'react';
import styled from 'styled-components';
import chroma from 'chroma-js';
import Ink from 'react-ink';

import { Colors } from '../../../layout';

const StyledButton = styled.button`
  transition: all 500ms cubic-bezier(0.2, 1, 0.22, 1);
  position: relative;
  display: block;
  width: 100%;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  background: ${Colors.main};
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background: ${chroma(Colors.main).brighten(0.2)};
  }
`;

type Props = {
  children: React.Node,
};

const Button = ({ children }: Props) => (
  <StyledButton>
    <Ink />
    {children}
  </StyledButton>
);

export default Button;
