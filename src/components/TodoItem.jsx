import React from 'react';
import PropTypes from 'prop-types';
import { GiSquare, GiCheckMark } from 'react-icons/gi';
import { MdDelete } from 'react-icons/md';
import '../styles/TodoItem.css';

export default class TodoItem extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      text: props.title,
    };
  }

  handleEdit = () => {
    this.setState({ editing: true });
  };

  handleCancel = () => {
    this.setState({ editing: false });
  };

  handleChange = (event) => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = (event) => {
    const { text } = this.state;
    const { onEdit } = this.props;

    event.preventDefault();

    if (text.trim()) {
      onEdit(text);
      this.setState({ editing: false });
    }
  };

  handleDelete = () => {
    const { onDelete } = this.props;
    onDelete();
  };

  handleToggle = () => {
    const { onToggle } = this.props;
    onToggle();
  };

  renderEditForm = () => {
    const { text } = this.state;

    return (
      <li className="todo-item">
        <form className="todo-edit-form" onSubmit={this.handleSubmit}>
          <input
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
            className="todo-edit-input"
            onChange={this.handleChange}
            onBlur={this.handleCancel}
            type="text"
            value={text}
          />
        </form>
      </li>
    );
  };

  renderTodoRow = () => {
    const { title, completed } = this.props;

    return (
      <>
        <li className="todo-item" onDoubleClick={this.handleEdit}>
          {completed
            ? <GiCheckMark className="check-icon" size={30} onClick={this.handleToggle} />
            : <GiSquare className="square-icon" size={30} onClick={this.handleToggle} />}
          <span className={`todo-title ${completed ? 'line-through' : ''}`}>{title}</span>
          <MdDelete className="delete-icon" size={30} onClick={this.handleDelete} />
        </li>
        <hr />
      </>
    );
  };

  render() {
    const { editing } = this.state;

    return (
      editing ? this.renderEditForm() : this.renderTodoRow()
    );
  }
}

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
};
