import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Login from '../login';

storiesOf('account.Login', module)
  .addWithDoc('default view', Login,
  'This is the default view',
  () => (
    <Login />
    ));
