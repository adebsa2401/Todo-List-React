import React from 'react';
import PropTypes from 'prop-types';

export default class TodoList extends React.PureComponent {
  render() {
    const { children } = this.props;

    return <ul className="todo-list">{React.Children.toArray(children)}</ul>;
  }
}

TodoList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};
