import React from 'react';
import PropTypes from 'prop-types';

export default class TodoForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  handleSubmit(event) {
    const { text } = this.state;
    const { onSubmit } = this.props;

    event.preventDefault();

    if (text.trim()) {
      onSubmit(text);
      this.setState({ text: '' });
    }
  }

  render() {
    const { text } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="new-todo"
          onChange={this.handleChange}
          placeholder="What needs to be done?"
          type="text"
          value={text}
        />
      </form>
    );
  }
}

TodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
