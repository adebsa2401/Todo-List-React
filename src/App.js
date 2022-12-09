import React from 'react';
import {
  createHashRouter, createRoutesFromElements, Route, RouterProvider,
} from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import AboutAppPage from './pages/AboutAppPage';
import AboutAuthorPage from './pages/AboutAuthorPage';
<<<<<<< Updated upstream
=======
import HomePage from './pages/HomePage';
>>>>>>> Stashed changes
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
