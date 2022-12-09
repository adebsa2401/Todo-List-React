import React from 'react';
import {
  createHashRouter, createRoutesFromElements, Route, RouterProvider,
} from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import AboutAppPage from './pages/AboutAppPage';
import AboutAuthorPage from './pages/AboutAuthorPage';
import Root from './pages/Root';
import HomePage from './pages/HomePage';

export default class App extends React.PureComponent {
  render() {
    const router = createHashRouter(
      createRoutesFromElements(
        <Route path="/" element={<Root />}>
          <Route path="" element={<HomePage />} />
          <Route path="about" element={<AboutPage />}>
            <Route path="app" element={<AboutAppPage />} />
            <Route path="author" element={<AboutAuthorPage />} />
          </Route>
        </Route>,
      ),
    );

    return (
      <RouterProvider router={router} />
    );
  }
}
