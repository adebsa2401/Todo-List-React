import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
// import '../styles/Todo.css';
import TodoItem from './TodoItem';

export default class TodoSection extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    this.loadTodos();
  }

  loadTodos = () => {
    const todos = localStorage.getItem('todos');
    if (todos) {
      this.setState({ todos: JSON.parse(todos) });
    }
  };

  saveTodos = () => {
    const { todos } = this.state;
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  addTodo = (title) => {
    if (title) {
      const { todos } = this.state;
      const todo = { id: Date.now(), title, completed: false };
      this.setState({ todos: [...todos, todo] }, this.saveTodos);
    }
  };

  editTodo = (id, title) => {
    const { todos } = this.state;
    this.setState(
      {
        todos: todos.map((todo) => {
          if (todo.id === id) {
            return { ...todo, title };
          }
          return todo;
        }),
      },
      this.saveTodos,
    );
  };

  deleteTodo = (id) => {
    const { todos } = this.state;
    this.setState({ todos: todos.filter((todo) => todo.id !== id) }, this.saveTodos);
  };

  toggleTodo = (id) => {
    const { todos } = this.state;
    this.setState(
      {
        todos: todos.map((todo) => {
          if (todo.id === id) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        }),
      },
      this.saveTodos,
    );
  };

  render() {
    const { todos } = this.state;

    return (
      <div className="todo">
        <TodoForm onSubmit={(title) => this.addTodo(title)} />
        <TodoList>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              title={todo.title}
              completed={todo.completed}
              onEdit={(title) => this.editTodo(todo.id, title)}
              onDelete={() => this.deleteTodo(todo.id)}
              onToggle={() => this.toggleTodo(todo.id)}
            />
          ))}
        </TodoList>
      </div>
    );
  }
}
