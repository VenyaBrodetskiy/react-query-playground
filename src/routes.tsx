import { createBrowserRouter, type RouteObject } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import HooksPlayground from './pages/HooksPlayground';
import ReactQueryPlayground from './pages/ReactQueryPlayground';
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
    ],
  },
];

export const router = createBrowserRouter(routes);
