import { useDeps, composeAll, composeWithTracker, compose } from 'mantra-core';
import { setComposerStub } from 'react-komposer';
import Login from '../components/login.jsx';
import SimpleSchema from 'simpl-schema';

export const composer = ({ context }, onData) => {
  const { Meteor } = context();
  const loginSchema = new SimpleSchema({
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
  });

  onData(null, { loginSchema });
};

export const depsMapper = (context, actions) => ({
  login: actions.account.login,
  context: () => context,
});

const LoginContainer = composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Login);

setComposerStub(LoginContainer, ({ }) => ({

}));

export default LoginContainer;
