import { createBrowserRouter, type RouteObject } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import HooksPlayground from './pages/HooksPlayground';
import ReactQueryPlayground from './pages/ReactQueryPlayground';
import React19Playground from './pages/React19Playground';
import React19Fetch from './pages/React19Fetch';
import { PATHS } from './paths';

const routes: RouteObject[] = [
  {
    path: PATHS.HOME,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: PATHS.HOOKS,
        element: <HooksPlayground />,
      },
      {
        path: PATHS.REACT_QUERY,
        element: <ReactQueryPlayground />,
      },
      {
        path: PATHS.REACT_19,
        element: <React19Playground />,
      },
      {
        path: PATHS.REACT_19_FETCH,
        element: <React19Fetch />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
