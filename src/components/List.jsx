import React from 'react';
import PropTypes from 'prop-types';

export default class List extends React.PureComponent {
  render() {
    const { children, ...props } = this.props;

    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <ul {...props}>
        {React.Children.map(children, (child) => (
          <li>{child}</li>
        ))}
      </ul>
    );
  }
}

List.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};
