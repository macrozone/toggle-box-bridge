import _ from 'lodash';
import { composeWithTracker } from 'mantra-core';


export const composer = (keys) => ({ context, ...props }, onData) => {
  const { i18n } = context();
  const translations = _.zipObject(keys, _.map(keys, key => i18n.t(key)));
  onData(null, { translations });
};

export default (...keys) => composeWithTracker(composer(keys));
