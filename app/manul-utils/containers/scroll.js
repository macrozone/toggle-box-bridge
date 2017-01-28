import { useDeps, composeAll, composeWithTracker, compose } from 'mantra-core';
import Scroll from '../components/scroll.jsx';

export const composer = ({ context, localState }, onData) => {
  const { LocalState } = context();

  const scrollTop = Number(LocalState.get(localState)) || 0;
  const onScroll = (newScrollTop) => {
    LocalState.set(localState, newScrollTop);
  };
  onData(null, { scrollTop, onScroll });
};

export const depsMapper = (context, actions) => ({
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Scroll);
