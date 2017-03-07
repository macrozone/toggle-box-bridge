import React from 'react';
import { mount } from 'react-mounter';

import MainLayout from './components/main_layout.jsx';
import Home from './components/home.jsx';
import RegisterForm from '../registration/containers/register_form';
import Login from '../account/containers/login';

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
  localeRoutes.route('/register', {
    name: 'register',
    action() {
      mount(MainLayoutCtx, {
        transparent: true,
        contentFullWidth: true,
        content: () => <RegisterForm />,
      });
    },
  });
  localeRoutes.route('/login', {
    name: 'login',
    action() {
      mount(MainLayoutCtx, {
        transparent: true,
        contentFullWidth: true,
        content: () => <Login />,
      });
    },
  });
}
