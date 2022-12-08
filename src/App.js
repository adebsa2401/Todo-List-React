import React from 'react';
import {
  createHashRouter, createRoutesFromElements, Route, RouterProvider,
} from 'react-router-dom';
import AboutAppPage from './pages/AboutAppPage';
import AboutAuthorPage from './pages/AboutAuthorPage';
import Root from './pages/Root';

export default class App extends React.PureComponent {
  render() {
    const router = createHashRouter(
      createRoutesFromElements(
        <Route path="/" element={<Root />}>
          <Route path="" element={<AboutAppPage />} />
          <Route path="about-app" element={<AboutAppPage />} />
          <Route path="about-author" element={<AboutAuthorPage />} />
        </Route>,
      ),
    );

    return (
      <RouterProvider router={router} />
    );
  }
}
