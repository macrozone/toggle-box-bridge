import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const Translations = new Mongo.Collection('translations');
Translations.schema = new SimpleSchema({
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
Translations.attachSchema(Translations.schema);

export default Translations;
