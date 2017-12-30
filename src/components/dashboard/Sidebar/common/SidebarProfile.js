// @flow
import * as React from 'react';
import styled from 'styled-components';

import Layout, { Colors } from '../../../../layout';
import { Avatar } from '../../../common';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${Layout.spacing};
  margin-bottom: ${Layout.spacing};
  padding-top: ${Layout.spacing};
  padding-bottom: ${Layout.spacing};
  padding-left: 5px;
  padding-right: 5px;
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: rgba(255, 255, 255, 0.3);
`;

const Name = styled.div`
  margin-left: ${Layout.spacing};
  font-size: 15px;
  font-weight: 300;
  color: ${Colors.white};
`;

class SidebarProfile extends React.PureComponent<void> {
  render() {
    return (
      <Wrapper>
        <Avatar name="Felippe Puhle" size={34} backgroundColor={Colors.snow} textColor={Colors.grey} />

        <Name>Felippe Puhle</Name>
      </Wrapper>
    );
  }
}

export default SidebarProfile;
