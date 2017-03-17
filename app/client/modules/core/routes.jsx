import React from 'react';
import { mount } from 'react-mounter';

import MainLayout from './containers/main_layout.js';
import Home from './components/home.jsx';
import RegisterForm from '../registration/containers/register_form';
import Login from '../account/containers/login';
import Profile from '../account/containers/profile';

export default function (injectDeps, { localeRoutes }) {
  const MainLayoutCtx = injectDeps(MainLayout);
  localeRoutes.route('/', {
    name: 'home',
    action() {
      mount(MainLayoutCtx, {
        content: () => <Profile />,
        contentNotLoggedIn: () => <Home />,
      });
    },
  });
  localeRoutes.route('/register', {
    name: 'register',
    action() {
      mount(MainLayoutCtx, {
        content: () => <p>Already logged in</p>,
        contentNotLoggedIn: () => <RegisterForm />,
      });
    },
  });
  localeRoutes.route('/login', {
    name: 'login',
    action() {
      mount(MainLayoutCtx, {
        content: () => <p>Already logged in</p>,
        contentNotLoggedIn: () => <Login />,
      });
    },
  });
}
