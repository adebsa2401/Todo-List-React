import React from 'react';
import { GrClose, GrMenu } from 'react-icons/gr';
import PropTypes from 'prop-types';
import List from './List';
import '../styles/SideBar.css';
import SideBarItem from './SideBarItem';

export default class SideBar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
    };
  }

  render() {
    const { children } = this.props;
    const { opened } = this.state;

    if (opened) {
      return (
        <div className="sidebar opened-sidebar">
          <GrClose
            className="close-icon"
            size={30}
            onClick={() => this.setState({ opened: false })}
          />
          <List className="sidebar-list">
            <SideBarItem to="/">Home</SideBarItem>
            <SideBarItem to="/about/app">About</SideBarItem>
          </List>
        </div>
      );
    }

    return (
      <div className="sidebar">
        <GrMenu
          className="hamburger-icon"
          size={30}
          onClick={() => this.setState({ opened: true })}
        />
        <List className="sidebar-list">
          {React.Children.toArray(children)}
        </List>
      </div>
    );
  }
}

SideBar.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
};

SideBar.defaultProps = {
  children: [],
};
