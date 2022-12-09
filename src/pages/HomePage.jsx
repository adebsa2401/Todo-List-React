import React from 'react';
import SideBar from '../components/SideBar';
import Todo from '../components/Todo';
import '../styles/HomePage.css';

export default class HomePage extends React.PureComponent {
  render() {
    return (
      <>
        <SideBar />
        <div className="content">
          <h1>todos</h1>
          <Todo />
        </div>
      </>
    );
  }
}
