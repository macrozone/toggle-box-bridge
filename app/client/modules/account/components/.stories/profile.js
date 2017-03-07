import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Profile from '../profile';


storiesOf('account.Profile', module)
  .addWithDoc('default view', Profile,
  'This is the default view',
  () => {
    return (
      <Profile />
    );
  })
