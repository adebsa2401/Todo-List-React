import React from 'react';
import PropTypes from 'prop-types';
import { GrFormAdd } from 'react-icons/gr';
import '../styles/TodoForm.css';

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
      <form className="todo-add-form" onSubmit={this.handleSubmit}>
        <input
          className="todo-input"
          onChange={this.handleChange}
          placeholder="Add todo..."
          type="text"
          value={text}
        />
        <GrFormAdd className="add-icon" size={30} onClick={this.handleSubmit} />
      </form>
    );
  }
}

TodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
