// @flow
import * as React from 'react';
import styled from 'styled-components';

import LoadingIcon from './LoadingIcon';

const Wrapper = styled.div`
  transition: all 200ms;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${props => (props.visible ? 9999 : -1)};
  opacity: ${props => (props.visible ? 1 : 0)};
  background: ${props => props.background};
  display: flex;
  justify-content: center;
  align-items: center;
`;

type Props = {
  visible: boolean,
  size: number,
  background: string,
  color: string,
};

const Loading = ({ visible, size, background, color }: Props) => (
  <Wrapper visible={visible} background={background}>
    <LoadingIcon size={size} color={color} />
  </Wrapper>
);

Loading.defaultProps = {
  visible: true,
  size: 44,
  background: '#FFF',
  color: '#AAA',
};

export default Loading;
