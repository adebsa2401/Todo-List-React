import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/SideBarItem.css';

export default class SideBarItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  render() {
    const { children, to } = this.props;
    const { active } = this.state;

    return (
      <Link className={active ? 'active' : null} to={to}>{React.Children.toArray(children)}</Link>
    );
  }
}

SideBarItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  to: PropTypes.string.isRequired,
};
