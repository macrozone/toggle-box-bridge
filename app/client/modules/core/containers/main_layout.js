import { useDeps, composeAll, composeWithTracker, compose } from 'mantra-core';

import MainLayout from '../components/main_layout.jsx';


export const composer = ({ context }, onData) => {
  const { Meteor } = context();
  const user = Meteor.user();
  onData(null, { user });
};

export const depsMapper = (context, actions) => ({
  context: () => context,
});

const MainLayoutContainer = composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(MainLayout);

export default MainLayoutContainer;
