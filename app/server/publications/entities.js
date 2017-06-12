
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';


import { Entities } from '/lib/collections';


export default () => {
  Meteor.publish('entities.all', function () {
    return Entities.find();
  });
};
