

export const getUserForEmail = (email) => {
  const Users = require('/lib/collections/users').default;

  return Users.getByEmail(email);
};

export const getUserProperty = (key) => {
  const _ = require('lodash');
  /* global Meteor */
  return _.get(Meteor.user(), key);
};

export const createUser = () => {
  const { Accounts } = require('meteor/accounts-base');

  const email = 'heinz@panter.ch';
  const password = 'heinzheinzson2017';
  const profile = {
    firstname: 'Heinz',
    lastname: 'Heinzson',
  };
  const userId = Accounts.createUser({ email, password, profile });
  Meteor.users.update(userId, { $set: { 'emails.0.verified': true } });
};

export const createUser2 = () => {
  const { Accounts } = require('meteor/accounts-base');

  const email = 'neo@panter.ch';
  const password = 'thereisnospoon';
  const profile = {
    firstname: 'Thomas',
    lastname: 'Anderson',
  };
  const userId = Accounts.createUser({ email, password, profile });
  Meteor.users.update(userId, { $set: { 'emails.0.verified': true } });
};


export const createAdmin = () => {
  const { Accounts } = require('meteor/accounts-base');
  const { Roles } = require('meteor/alanning:roles');

  const profile = {
    firstname: 'Admine',
    lastname: 'Globine',
  };
  const email = 'admin-test@panter.ch';
  const password = 'admin1234';
  const userId = Accounts.createUser({ email, password, profile });
  Meteor.users.update(userId, { $set: { 'emails.0.verified': true } });
  Roles.addUsersToRoles(userId, 'admin', Roles.GLOBAL_GROUP);
};

export const removeUsers = () => {
  /* global Meteor */
  Meteor.users.remove({ 'emails.address': 'heinz@panter.ch' });
  Meteor.users.remove({ 'emails.address': 'neo@panter.ch' });
  Meteor.users.remove({ 'emails.address': 'heinz2@panter.ch' });
  Meteor.users.remove({ 'emails.address': 'admin-test@panter.ch' });
};


export const removeUserForEmail = ({ email }) => {
  Meteor.users.remove({ 'emails.address': email });
};
export const logout = (done) => {
  Meteor.logout(done);
};

export const login = (done) => {
  Meteor.loginWithPassword('heinz@panter.ch', 'heinzheinzson2017', done);
};

export const loginUser2 = (done) => {
  Meteor.loginWithPassword('neo@panter.ch', 'thereisnospoon', done);
};

export const loginAdmin = (done) => {
  Meteor.loginWithPassword('admin-test@panter.ch', 'admin1234', done);
};
