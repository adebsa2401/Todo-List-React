import React from 'react';
import SideBar from '../components/SideBar';
import SideBarItem from '../components/SideBarItem';
import Todo from '../components/Todo';
import '../styles/HomePage.css';

export default class HomePage extends React.PureComponent {
  render() {
    return (
      <>
        <SideBar>
          <SideBarItem to="/about-app">About App</SideBarItem>
          <SideBarItem to="/about-author">About Author</SideBarItem>
        </SideBar>
        {/* <SideBar /> */}
        <div className="content">
          <h1>todos</h1>
          <Todo />
        </div>
      </>
    );
  }
}
