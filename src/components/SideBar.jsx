import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import PropTypes from 'prop-types';
import List from './List';

export default class SideBar extends React.PureComponent {
  render() {
    const { children } = this.props;

    return (
      <div className="sidebar">
        <GiHamburgerMenu />
        <List>
          {React.Children.toArray(children)}
        </List>
      </div>
    );
  }
}

SideBar.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};
