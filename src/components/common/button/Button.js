// @flow
import * as React from 'react';
import styled from 'styled-components';
import chroma from 'chroma-js';

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
  &:active {
    box-shadow: 0 0 0 2px
      ${chroma(Colors.main)
        .brighten(0.5)
        .alpha(0.5)
        .css()};
  }
`;

type Props = {
  children: React.Node,
};

const Button = ({ children }: Props) => <StyledButton>{children}</StyledButton>;

export default Button;
