import { configure, setAddon, addDecorator } from '@kadira/storybook';
import { disable } from 'react-komposer';
import { setStubbingMode } from 'react-komposer';
import addWithDoc from 'storybook-addon-props';

setAddon(addWithDoc);
setStubbingMode();
disable();

function loadStories() {
  // require as many as stories you need.
  require('../client/modules/core/components/.stories/index.js');
}

configure(loadStories, module);
