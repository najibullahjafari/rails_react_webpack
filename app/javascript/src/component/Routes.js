import React from 'react';
import { useRoutes } from 'react-router-dom';
import Greeting from './Greeting';

export default function AppRoutes() {
  const routes = [
    {
      path: '/',
      element: <Greeting />,
    },
  ];

  const appRoutes = useRoutes(routes);

  return appRoutes;
}