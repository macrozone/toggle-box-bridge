import TranslationStore from '@panter/manul-i18n/dist/stores/collection';
import { Translations } from '/lib/collections';
import { Meteor } from 'meteor/meteor';
// auto init
const store = new TranslationStore({
  Meteor,
  collection: Translations,
});
// on server, you always need to specify a locale
// that's why we do not name it t, so that one does not confuse it
/* eslint import/prefer-default-export: 0*/
export const translate = (locale, keyOrNamespace, params) => (
  store.translate(keyOrNamespace, { _locale: locale, ...params })
);
