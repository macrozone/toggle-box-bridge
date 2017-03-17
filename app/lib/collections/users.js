import 'uniforms';
import { Meteor } from 'meteor/meteor';
import UserSchema from '../schemas/user';


const Users = Meteor.users;


Users.UserSchema = UserSchema;


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
