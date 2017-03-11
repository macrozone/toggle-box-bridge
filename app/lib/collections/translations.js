import { Mongo } from 'meteor/mongo';
import TranslationsSchema from '../schemas/translations';

const Translations = new Mongo.Collection('translations');
Translations.schema = TranslationsSchema;
Translations.attachSchema(Translations.schema);

export default Translations;
