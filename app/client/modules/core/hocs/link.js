import { useDeps, composeAll, composeWithTracker, compose } from 'mantra-core';
import { setComposerStub } from 'react-komposer';

export const composer = ({ context, ...nav }, onData) => {
  const { manulRouter } = context();
  onData(null, {
    ...manulRouter.createNavItem(nav),
  });
};

export const depsMapper = (context, actions) => ({
  context: () => context,
});

export default (C) => {
  setComposerStub(C, props => props);
  return composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(C);
};
