import { useDeps, composeAll, composeWithTracker, compose } from 'mantra-core';
import { withTranslatedSchema } from '@panter/manul-i18n';
import Edit from '../components/edit.jsx';

export const composer = ({ context, params: { _id }, docLoaded, doc, update, create, allowInsertWithId }, onData) => {
  if (docLoaded) {
    if (!doc && allowInsertWithId) {
      onData(null, { upsert: create, doc: { _id } });
    } else {
      onData(null, { upsert: update, doc });
    }
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context,
});


export default composeAll(
  compose(composer),
  withTranslatedSchema(({ collectionName }) => ({ schema: collectionName })),
  useDeps(depsMapper)
)(Edit);
