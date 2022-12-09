import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../components/SideBar';
import SideBarItem from '../components/SideBarItem';

export default class AboutPage extends React.PureComponent {
  render() {
    return (
      <>
        <SideBar>
          <SideBarItem to="/about/app">About App</SideBarItem>
          <SideBarItem to="/about/author">About Author</SideBarItem>
        </SideBar>
        <div className="content">
          <Outlet />
        </div>
      </>
    );
  }
}
