import SimpleSchema from 'simpl-schema';
import _ from 'lodash';

export const AddressSchema = new SimpleSchema({
  address: {
    type: String,
  },
  zipCode: {
    type: String,
  },
  city: {
    type: String,
  },
  phone: {
    type: String,
  },
});


export default new SimpleSchema({
  gender: {
    type: String,
    allowedValues: ['m', 'f'],
    uniforms: {
      checkboxes: true,
    },
  },
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  address: {
    type: AddressSchema,
    optional: true,
    uniforms: {
      label: null,
    },
  },
});
