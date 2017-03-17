import { mount } from 'react-mounter';
import React from 'react';
import AdminHome from './components/admin_home';
import MainLayout from '../core/containers/main_layout';

export default function (injectDeps, { adminContext: { adminRoutes } }) {
  const MainLayoutCtx = injectDeps(MainLayout);
  adminRoutes.route('/', {
    name: 'admin.index',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<AdminHome />),
      });
    },
  });
}
