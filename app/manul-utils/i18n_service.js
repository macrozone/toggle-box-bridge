/**
DEPRECATED: use manul-i18n

available in context as i18n.

i18n.t(key, props): translate the given key (caution: only reactive in tracker-komposer)

use <i18n.T>-component to translate strings in react components. No need for a container.
T is usually injected from context

i18n.translateSchema(simpleSchema): adds translation to the simpleSchema

**/
import _ from 'lodash';
import React from 'react';

export default class {

  constructor({ universeI18n, Meteor, SimpleSchema, FlowRouter }, { supportedLocales, defaultLocale = 'en' }) {
    console.warn('manul-utils/i18n_service is DEPRECATED and will be removed in a future version');
    this.universeI18n = universeI18n;
    this.FlowRouter = FlowRouter;
    this.Meteor = Meteor;
    this.SimpleSchema = SimpleSchema;
    this.translator = this.universeI18n.createReactiveTranslator();

    this.supportedLocales = supportedLocales;
    this.defaultLocale = defaultLocale;

    this.T = this._createT();
    this.t = this.translator;
  }


  supports(locale) {
    return this.supportedLocales.indexOf(locale) !== -1;
  }

  getFallbackLocale(locale) {
    if (!locale) {
      return this.defaultLocale;
    } else if (this.supports(locale)) {
      return locale;
    }
    const [lang] = locale.split('-');
    if (this.supports(lang)) {
      return lang;
    }
    return this.defaultLocale;
  }


  setLocale(locale, callback) {
    this.universeI18n.setLocale(this.getFallbackLocale(locale)).then(callback);
  }
  getLocale() {
    return this.universeI18n.getLocale();
  }

  LocaleRoutes(baseRoutes = this.FlowRouter) {
    const setLocaleByRoute = ({ params: { locale } }, redirect, stop) => {
      if (this.supports(locale)) {
        this.setLocale(locale);
      } else {
        this.FlowRouter.setParams({ locale: this.getFallbackLocale(locale) });
        stop();
      }
    };
    return baseRoutes.group({
      prefix: '/:locale?',
      triggersEnter: [setLocaleByRoute],
    });
  }

  translateSchema(schema, namespace) {
    // translate all the labels
    const translations = this.translator(namespace);
    const translatedDef = {};
    const _addSubSchemaTranslations = (parentFieldFullName = null, parentTranslation = {}) => {
      schema.objectKeys(parentFieldFullName).forEach((field) => {
        const fullFieldName = parentFieldFullName ? `${parentFieldFullName}.${field}` : field;
        const fieldTranslation = parentTranslation[field];
        const fieldDefinition = schema.getDefinition(fullFieldName);
        const defaultTransform = value => (fieldTranslation && fieldTranslation[value]) || value;
        let label = null;
        let hintText = null;
        let hintTitle = null;
        if (fieldTranslation) {
          if (_.isString(fieldTranslation)) {
            label = fieldTranslation;
          } else {
            label = fieldTranslation.label;
            hintText = fieldTranslation.hintText;
            hintTitle = fieldTranslation.hintTitle;
          }
        }
        // recursivly add subfields as well, but flat
        if (schema.objectKeys(fullFieldName).length > 0) {
          _addSubSchemaTranslations(fullFieldName, fieldTranslation);
        }
        translatedDef[fullFieldName] = {
          label: label || `${namespace}.${fullFieldName}`,
          uniforms: {
            transform: defaultTransform,
            hintText,
            hintTitle,
            ...fieldDefinition.uniforms, // can override default transform
          },
        };
      });
    };
    _addSubSchemaTranslations(null, translations);
    const translatedScheme = new this.SimpleSchema([schema, translatedDef]);
    const simpleSchemaMessages = evalSimpleSchemaRegexKeys(
      this.universeI18n.getTranslation('simpleSchema')
    );
    translatedScheme.messages(simpleSchemaMessages);

    return translatedScheme;
  }
  currentLanguageIsLoaded(callback) {
    // somewhat hacky solution, there is also a problem with it. That's why there is a defer
    // https://github.com/vazco/meteor-universe-i18n/issues/41
    this.setLocale(this.getLocale(), () => this.Meteor.defer(callback));
  }

  getSupportedLocales() {
    return this.supportedLocales;
  }

  onChangeLocale(...args) {
    return this.universeI18n.onChangeLocale(...args);
  }


  _createT() {
    const UniverseI18nT = this.universeI18n.createComponent(this.translator);
    const TWithDebug = (props) => {
      const _props = {
        title: props.children,
      };
      return (
        <UniverseI18nT {...props} _props={_props} />
      );
    };
    return this.Meteor.isDevelopment ? TWithDebug : UniverseI18nT;
  }


}

// allowes to use SimpleSchema.RegEx.Email keys in the translation file, instead of the actual regex
function evalSimpleSchemaRegexKeys(messages) {
  if (messages.regEx) {
    const regEx = messages.regEx.map(({ msg, exp }) => ({ msg, exp: exp && exp.split('.').reduce((o, i) => o[i], global) }));
    return { ...messages, regEx };
  }
  return messages;
}
