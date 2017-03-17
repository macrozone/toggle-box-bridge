import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import RegisterForm from '../register_form';


storiesOf('registration.RegisterForm', module)
  .addWithDoc('default view', RegisterForm,
  'This is the default view',
  () => (
    <RegisterForm />
    ));
