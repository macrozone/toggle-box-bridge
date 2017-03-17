import { Meteor } from 'meteor/meteor';

import YAML from 'yamljs';
import importIntoCollection from '@panter/manul-i18n/dist/import_into_collection';
import { Translations } from '/lib/collections';

/* global Assets*/
export default () => {
  Meteor.startup(() => {
    const localesToSeed = ['de'];
    const translations = {};
    const translationsForLocale = (locale) => {
      const translation = YAML.parse(Assets.getText(`i18n-seed/${locale}.yaml`));
      translations[locale] = translation;
    };

    localesToSeed.forEach(translationsForLocale);

    importIntoCollection({
      translations,
      collection: Translations,
      locales: localesToSeed,
      override: false,
    });
  });
};
