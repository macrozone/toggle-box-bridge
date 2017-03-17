import SimpleSchema from 'simpl-schema';

export default new SimpleSchema({
  _id: {
    type: String,
  },
  value_de: {
    type: String,
    optional: true,
  },
  value_en: {
    type: String,
    optional: true,
  },
  value_fr: {
    type: String,
    optional: true,
  },
  value_it: {
    type: String,
    optional: true,
  },
});
