import * as React from 'react';
import styled from 'styled-components';

import routeTo from '../../../router/utils/routeTo';
import Layout, { Colors } from '../../../layout';
import SidebarHeader from './common/SidebarHeader';
import SidebarItem from './common/SidebarItem';
import SidebarProfile from './common/SidebarProfile';
import BackgroundImage from './assets/background.jpg';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: ${Layout.navbar.width};
  box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0 rgba(0, 0, 0, 0.12),
    0 8px 10px -5px rgba(0, 0, 0, 0.2);
`;

const ImageBackground = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url("${BackgroundImage}");
  background-size: cover;
  background-position: 50%;
`;

const OverlayBackground = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${Colors.main};
  opacity: 0.8;
`;

const Content = styled.div`
  position: relative;
  z-index: 3;
  padding: ${Layout.spacing};
`;

const Sidebar = () => (
  <Wrapper>
    <ImageBackground />
    <OverlayBackground />

    <Content>
      <SidebarHeader />
      <SidebarProfile />

      <SidebarItem icon="dashboard" title="Dashboard" url={routeTo('dashboard')} active />

      <SidebarItem
        icon="apps"
        title="Components"
        subitems={[
          {
            title: 'Buttons',
            url: routeTo('dashboard'),
          },
          {
            title: 'Grid System',
            url: routeTo('dashboard'),
          },
          {
            title: 'Panels',
            url: routeTo('dashboard'),
          },
          {
            title: 'Sweet Alert',
            url: routeTo('dashboard'),
          },
          {
            title: 'Notifications',
            url: routeTo('dashboard'),
          },
          {
            title: 'Icons',
            url: routeTo('dashboard'),
          },
          {
            title: 'Typography',
            url: routeTo('dashboard'),
          },
        ]}
      />
    </Content>
  </Wrapper>
);

export default Sidebar;
