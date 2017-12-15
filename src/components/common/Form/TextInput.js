// @flow
import * as React from 'react';
import styled from 'styled-components';

import Layout, { Colors } from '../../../layout';

const StyledInput = styled.input`
  transition: all 500ms cubic-bezier(0.2, 1, 0.22, 1);
  display: block;
  width: 100%;
  padding: 10px 20px;
  font-size: 16px;
  color: ${Colors.grey};
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  margin-bottom: ${Layout.spacing};

  &:focus {
    border-color: ${Colors.main};
  }

  &::-webkit-input-placeholder {
    color: ${Colors.silver};
  }
  &::-moz-placeholder {
    color: ${Colors.silver};
  }
  &:-ms-input-placeholder {
    color: ${Colors.silver};
  }
  &:-moz-placeholder {
    color: ${Colors.silver};
  }
`;

type Props = {
  type: string,
  placeholder?: string,
};

const TextInput = ({ type, placeholder }: Props) => <StyledInput type={type} placeholder={placeholder} />;

TextInput.defaultProps = {
  type: 'text',
};

export default TextInput;
