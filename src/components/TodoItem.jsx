import React from 'react';
import PropTypes from 'prop-types';

export default class TodoItem extends React.PureComponent {
  render() {
    const { children } = this.props;

    return <li className="todo-item">{React.Children.toArray(children)}</li>;
  }
}

TodoItem.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};
