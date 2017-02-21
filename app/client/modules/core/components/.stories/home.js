import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Home from '../home';


storiesOf('core.Home', module)
  .addWithDoc('default view', Home,
  'This is the default view',
  () => {
    return (
      <Home />
    );
  })
