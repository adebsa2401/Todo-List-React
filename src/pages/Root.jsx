import React from 'react';
import { Outlet } from 'react-router-dom';

export default class Root extends React.PureComponent {
  render() {
    return (
      <main>
        <Outlet />
      </main>
    );
  }
}
