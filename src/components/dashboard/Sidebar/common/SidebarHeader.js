// @flow
import * as React from 'react';
import styled from 'styled-components';

import Layout, { Colors } from '../../../../layout';
import { Logo } from '../../../common';

const Wrapper = styled.div`
  text-align: center;
  padding-top: ${Layout.spacing};
  padding-bottom: ${Layout.spacing};
`;

class SidebarHeader extends React.PureComponent<void> {
  render() {
    return (
      <Wrapper>
        <Logo width={150} iconColor={Colors.white} textColor={Colors.white} />
      </Wrapper>
    );
  }
}

export default SidebarHeader;
