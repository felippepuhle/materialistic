// @flow
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Layout, { Colors } from '../../../../layout';
import { getInitials } from '../../../../utils/strings';
import { MaterialIcon } from '../../../common';

const TYPE = {
  ITEM: 'ITEM',
  SUBITEM: 'SUBITEM',
};

const ITEM_HEIGHT = 48;
const SUBITEM_HEIGHT = 40;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${Layout.spacing};
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  flex: 1;
  text-decoration: none;
`;

const Anchor = styled.div`
  transition: all 200ms;
  cursor: pointer;
  display: flex;
  flex: 1;
  align-items: center;
  height: ${props => (props.type === TYPE.SUBITEM ? SUBITEM_HEIGHT : ITEM_HEIGHT)}px;
  padding: 0 ${Layout.spacing};
  border-radius: 3px;
  box-shadow: ${props => (props.active ? '0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(60,72,88,.4)' : 'none')};
  background-color: ${props => {
    if (props.active) {
      return Colors.white;
    }

    return props.activeSubItem ? 'rgba(255, 255, 255, .15)' : Colors.transparent;
  }};

  &:hover {
    background-color: ${props => (props.active ? Colors.white : 'rgba(255, 255, 255, .15)')};
  }
`;

const Title = styled.div`
  transition: all 200ms;
  font-size: ${props => (props.type === TYPE.SUBITEM ? 14 : 15)}px;
  font-weight: 300;
  color: ${props => (props.active ? Colors.grey : Colors.white)};
  opacity: ${props => (props.active ? 0.8 : 1)};
`;

const Icon = styled.div`
  width: 30px;
  text-align: center;
  margin-right: ${Layout.spacing};
`;

const StyledMaterialIcon = styled(MaterialIcon)`
  transition: all 200ms;
  font-size: ${props => (props.type === TYPE.SUBITEM ? 20 : 24)}px;
  color: ${props => (props.active ? Colors.grey : Colors.snow)};
  opacity: ${props => (props.active ? 0.8 : 1)};
`;

const InitialsIcon = Title.extend`
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const SubItems = styled.div`
  transition: all 200ms;
  padding-top: ${Layout.spacing};
  height: ${props => (props.open ? `${props.count * ITEM_HEIGHT}px` : 0)};
  overflow: hidden;
`;

type ItemType = {
  icon: string | React.Node,
  title: string,
  url?: string,
  active?: boolean,
};

type Props = ItemType & {
  type: $Enum<typeof TYPE>,
  subitems?: Array<ItemType>,
};

type State = {
  open: boolean,
};

class SidebarItem extends React.PureComponent<Props, State> {
  static defaultProps = {
    type: TYPE.ITEM,
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      open: this.hasActiveSubItem(),
    };
  }

  hasActiveSubItem = (): boolean => {
    const { subitems } = this.props;

    if (!subitems) {
      return false;
    }

    return subitems.filter(subitem => !!subitem.active).length > 0;
  };

  toggle = () => {
    this.setState({ open: !this.state.open });
  };

  renderAnchor = () => {
    const { type, icon, title, url, active } = this.props;

    const activeSubItem = this.hasActiveSubItem();

    const renderAnchorContent = () => (
      <Anchor type={type} active={active} activeSubItem={activeSubItem} onClick={this.toggle}>
        <Icon>
          {icon && (
            <StyledMaterialIcon type={type} active={active}>
              {icon}
            </StyledMaterialIcon>
          )}
          {!icon && (
            <InitialsIcon type={type} active={active}>
              {getInitials(title)}
            </InitialsIcon>
          )}
        </Icon>

        <Title type={type} active={active}>
          {title}
        </Title>
      </Anchor>
    );

    if (!url) {
      return renderAnchorContent();
    }

    return <StyledNavLink to={url}>{renderAnchorContent()}</StyledNavLink>;
  };

  renderSubitems = () => {
    const { subitems } = this.props;
    const { open } = this.state;

    if (!subitems) {
      return null;
    }

    return (
      <SubItems open={open} count={subitems.length}>
        {subitems.map((subitem, index) => <SidebarItem key={index} type={TYPE.SUBITEM} {...subitem} />)}
      </SubItems>
    );
  };

  render() {
    return (
      <Wrapper>
        {this.renderAnchor()}
        {this.renderSubitems()}
      </Wrapper>
    );
  }
}

export default SidebarItem;
