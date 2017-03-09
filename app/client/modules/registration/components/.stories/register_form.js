import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import RegisterForm from '../register_form';
import UserProfileSchema from '/lib/schemas/user_profile';
import LoginSchema from '/lib/schemas/login';
import RegisterSchema from '/lib/schemas/register';

const registerSchema = LoginSchema.extend(RegisterSchema);

storiesOf('registration.RegisterForm', module)
  .addWithDoc('default view', RegisterForm,
  'This is the default view',
  () => {
    return (
      <RegisterForm registerSchema={UserProfileSchema.extend(registerSchema)}/>
    );
  })
