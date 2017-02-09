import { useDeps, composeAll, composeWithTracker, compose } from 'mantra-core';
import AdminLayout from '../components/admin_layout.jsx';
import MainLayout from '/client/modules/core/containers/main_layout';
import restrictToRoles from '/client/modules/core/hocs/restrict_to_roles';
import NotAllowedMessage from '../components/not_allowed_message';
import React from 'react';

export const composer = ({ context }, onData) => {
  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  restrictToRoles('admin', () => (
    <MainLayout content={() => <NotAllowedMessage />} />
    )
  ),
  useDeps(depsMapper)
)(AdminLayout);
