import { lifecycle } from 'recompose';
import _ from 'lodash';
import { useDeps, composeAll, composeWithTracker, compose } from 'mantra-core';

export const setLocalStateOnMount = (localState, value) => (
  lifecycle({
    componentDidMount() {
      this.props.context().LocalState.set(
        localState,
        _.isFunction(value) ? value(this.props) : value
      );
    },
  })
);

export const depsMapper = (context, actions) => ({
  context: () => context,
});

export default (localState, value) => composeAll(
  setLocalStateOnMount(localState, value),
  useDeps(depsMapper)
);
