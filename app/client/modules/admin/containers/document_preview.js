import { useDeps, composeAll, composeWithTracker, compose } from 'mantra-core';
import DocumentPreview from '../components/document_preview.jsx';

const defaultPreview = doc => doc._id;

export const composer = ({ context, docId, doc, docLoaded, getPreviewLabel = defaultPreview }, onData) => {
  if (doc && docLoaded) {
    const label = getPreviewLabel(doc);
    onData(null, { label });
  } else {
    onData(null, { label: docId });
  }
};


export const depsMapper = (context, actions) => ({
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(DocumentPreview);
