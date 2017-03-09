import { useDeps, composeAll, composeWithTracker, compose } from 'mantra-core';
import { setComposerStub } from 'react-komposer';
import Profile from '../components/profile.jsx';
import userProfileSchema from '/lib/schemas/user_profile';

export const composer = ({ context }, onData) => {
  const { Meteor, Collections, Roles } = context();
  const userId = Meteor.userId();
  const userProfile = Collections.Users.findOne(userId);
  const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin', Roles.GLOBAL_GROUP);
  onData(null, { userProfile, userProfileSchema, isAdmin });
};

export const depsMapper = (context, actions) => ({
  logout: actions.account.logout,
  context: () => context,
});

const ProfileContainer = composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Profile);

setComposerStub(ProfileContainer, ({ }) => ({

}));

export default ProfileContainer;
