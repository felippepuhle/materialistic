// @flow
import * as React from 'react';
import styled from 'styled-components';

import { Colors } from '../../../layout';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: ${props => props.size / 2}px;
  overflow: hidden;
  background-color: ${props => props.backgroundColor};
  font-size: ${props => props.size / 3}px;
  font-weight: bold;
  color: ${props => props.textColor};
`;

type Props = {
  name: string,
  size: ?number,
  backgroundColor: ?string,
  textColor: ?string,
};

class Avatar extends React.PureComponent<Props> {
  static defaultProps = {
    size: 50,
    backgroundColor: Colors.main,
    textColor: Colors.white,
  };

  getInitials = (): string => {
    const { name } = this.props;

    return name
      .split(' ')
      .slice(0, 2)
      .map(namePart => namePart.charAt(0))
      .join('');
  };

  render() {
    const { size, backgroundColor, textColor } = this.props;

    return (
      <Wrapper size={size} backgroundColor={backgroundColor} textColor={textColor}>
        {this.getInitials()}
      </Wrapper>
    );
  }
}

export default Avatar;
