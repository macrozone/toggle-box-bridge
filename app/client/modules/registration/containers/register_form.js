import { useDeps, composeAll, composeWithTracker, compose } from 'mantra-core';
import { setComposerStub } from 'react-komposer';
import RegisterForm from '../components/register_form.jsx';
import LoginSchema from '/lib/schemas/login';
import RegisterSchema from '/lib/schemas/register';

export const composer = ({ context }, onData) => {
  const { Meteor } = context();
  const registerSchema = LoginSchema.extend(RegisterSchema);
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
