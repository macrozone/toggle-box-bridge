import { useDeps, composeAll, composeWithTracker, compose } from 'mantra-core';
import { setComposerStub } from 'react-komposer';
import RegisterForm from '../components/register_form.jsx';
import UserProfileSchema from '/lib/schemas/user_profile';
import SimpleSchema from 'simpl-schema';

export const composer = ({ context }, onData) => {
  const { Meteor } = context();

  const registerSchema = UserProfileSchema.extend(new SimpleSchema({
    email: {
      type: String,
      regEx: SimpleSchema.RegEx.Email,
    },
    password: {
      type: String,
      uniforms: {
        type: 'password',
      },
    },
    confirmPassword: {
      type: String,
      label: 'Enter the password again',
      custom() {
        if (this.value !== this.field('password').value) {
          return 'passwordMismatch';
        }
      },
      uniforms: {
        type: 'password',
      },
    },
  }));

  onData(null, { registerSchema });
};

export const depsMapper = (context, actions) => ({
  register: actions.registration.register,
  context: () => context,
});

const RegisterFormContainer = composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(RegisterForm);

setComposerStub(RegisterFormContainer, ({ }) => ({

}));

export default RegisterFormContainer;
