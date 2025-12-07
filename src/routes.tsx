import { createBrowserRouter, type RouteObject } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import HooksPlayground from './pages/HooksPlayground';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'hooks',
        element: <HooksPlayground />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

