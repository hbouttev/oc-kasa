import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './normalize.scss';
import './index.scss';
import Root from './routes/root';
import ErrorPage, { loader as errorLoader } from './routes/error-page';
import Home, { loader as homeLoader } from './routes/_index';
import Housing, {
  loader as housingLoader,
} from './routes/housings.$housingId.jsx';
import About from './routes/about';

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
            element: <Home />,
            loader: homeLoader,
          },
          {
            path: 'housings/:housingId',
            element: <Housing />,
            loader: housingLoader,
          },
          {
            path: 'about',
            element: <About />,
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
