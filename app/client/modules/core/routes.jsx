import React from 'react';
import { mount } from 'react-mounter';

import MainLayout from './components/main_layout.jsx';
import Home from './components/home.jsx';

export default function (injectDeps, { localeRoutes }) {
  const MainLayoutCtx = injectDeps(MainLayout);
  localeRoutes.route('/', {
    name: 'home',
    action() {
      mount(MainLayoutCtx, {
        transparent: true,
        contentFullWidth: true,
        content: () => <Home />,
      });
    },
  });
}
