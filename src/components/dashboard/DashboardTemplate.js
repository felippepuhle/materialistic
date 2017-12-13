import * as React from 'react';
import styled from 'styled-components';

import drawRoutes from '../../router/utils/drawRoutes';
import Content from './Content/Content';
import Sidebar from './Sidebar/Sidebar';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
`;

const DashboardTemplate = props => (
  <Wrapper>
    <Sidebar />

    <Content>{drawRoutes(props.routes)}</Content>
  </Wrapper>
);

export default DashboardTemplate;
