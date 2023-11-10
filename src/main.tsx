import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './normalize.scss';
import './index.scss';
import Root from './routes/root';
import ErrorPage, { loader as errorLoader } from './routes/error-page';
import HomePage, { loader as homeLoader } from './routes/_index';
import HousingPage, {
  loader as housingLoader,
} from './routes/housings.$housingId';
import AboutPage from './routes/about';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <HomePage />,
            loader: homeLoader,
          },
          {
            path: 'housings/:housingId',
            element: <HousingPage />,
            loader: housingLoader,
          },
          {
            path: 'about',
            element: <AboutPage />,
          },
          {
            path: '/*',
            element: <></>,
            loader: errorLoader,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
