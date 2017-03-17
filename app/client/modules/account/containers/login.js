import { useDeps, composeAll, composeWithTracker, compose } from 'mantra-core';
import { setComposerStub } from 'react-komposer';
import Login from '../components/login.jsx';


export const composer = ({ context }, onData) => {
  const { Meteor, Schemas } = context();
  const loginSchema = Schemas.Login;

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
