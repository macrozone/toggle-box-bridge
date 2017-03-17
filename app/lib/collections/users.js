import 'uniforms';
import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import _ from 'lodash';
import UserProfileSchema from '../schemas/user_profile';

const Users = Meteor.users;


Users.UserSchema = new SimpleSchema({
  _id: {
    type: String,
    optional: true,
    uniforms: {
      disabled: true,
    },
  },
  createdAt: {
    type: Date,
    optional: true,
    uniforms: {
      component: () => null,
    },
    autoValue() {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return { $setOnInsert: new Date() };
      }
      _.invoke(this, 'unset');  // Prevent user from supplying their own value
      return undefined;
    },
  },
  lastAccess: {
    type: Date,
    optional: true,
    uniforms: {
      disabled: true,
    },
  },
  isOnline: {
    type: Boolean,
    optional: true,
    uniforms: {
      disabled: true,
    },
  },
  profile: {
    type: UserProfileSchema,
    optional: true,
  },
  emails: {
    type: Array,
    optional: true,
  },
  'emails.$': {
    type: Object,
    optional: true,
  },
  'emails.$.address': {
    type: String,
    optional: true,
    regEx: SimpleSchema.RegEx.Email,
  },
  'emails.$.verified': {
    type: Boolean,
    optional: true,
  },
  services: {
    type: Object,
    optional: true,
    blackbox: true,
    uniforms: {
      component: () => null,
    },
  },
  roles: {
    type: Object,
    optional: true,
    blackbox: true,
    autoValue() {
      if (this.value === null) {
        return {};
      }
      return undefined;
    },
    uniforms: {
      component: () => null,
    },
  },
});


Users.attachSchema(Users.UserSchema);


Users.deny({
  update() { return true; },
});

Users.getByEmail = email => Users.findOne({
  emails: {
    $elemMatch: {
      address: email.toLowerCase(),
    },
  },
});

export default Users;
