import { useDeps, composeAll, composeWithTracker, compose } from 'mantra-core';
import { setComposerStub } from 'react-komposer';
import React from 'react';

/**

DEPRECATED, use manul-i18n/translation_container instead:
import {T} from 'manul-i18n'

**/

export const depsMapper = (context, actions) => ({
  context: () => context,
  T: context.i18n.T,
});

const T = composeAll(
  useDeps(depsMapper)
)(({ T, ...props }) => <T {...props} />);
setComposerStub(T, props => ({ T: () => <span>{props.children}</span> }));


export default T;
