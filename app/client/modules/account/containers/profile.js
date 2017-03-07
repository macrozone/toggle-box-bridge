import { useDeps, composeAll, composeWithTracker, compose } from 'mantra-core';
import { setComposerStub } from 'react-komposer';
import Profile from '../components/profile.jsx';

export const composer = ({ context }, onData) => {
  const { Meteor } = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context,
});

const ProfileContainer = composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Profile);

setComposerStub(ProfileContainer, ({ }) => ({

}));

export default ProfileContainer;
