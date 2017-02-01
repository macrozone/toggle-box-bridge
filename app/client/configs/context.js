import * as Collections from '/lib/collections';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { ReactiveDict } from 'meteor/reactive-dict';
import { ReactiveVar } from 'meteor/reactive-var';
import { Tracker } from 'meteor/tracker';

import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import moment from 'moment';
import momentDe from 'moment/locale/de';
import momentFr from 'moment/locale/fr';
import momentIt from 'moment/locale/it';

import ManulRouter from '@panter//manul-router';
import { I18n, T } from '@panter/manul-i18n';
import TranslationStore from '@panter/manul-i18n/dist/stores/collection';


export default function () {
  const LocalState = new ReactiveDict();

  moment.locale('fr', momentFr);
  moment.locale('it', momentIt);
  moment.locale('de', momentDe);

  const i18n = new I18n({
    supportedLocales: ['de', 'en', 'fr', 'it'],
    defaultLocale: 'de',
    translationStore: new TranslationStore({
      Meteor,
      ReactiveVar,
      collection: Collections.Translations,
    }),
  });

  i18n.T = T;

  const manulRouter = new ManulRouter(
    { FlowRouter, Meteor, i18n },
  );

  i18n.gotoTranslationEdit =

  i18n.onChangeLocale(locale => moment.locale(locale));

  return {
    Meteor,
    FlowRouter,
    manulRouter,
    createNavItem: manulRouter.createNavItem,
    gotoRoute: manulRouter.go.bind(manulRouter),
    SimpleSchema,
    LocalState,
    Collections,
    Tracker,
    i18n,
    localeRoutes: manulRouter.createLocaleRoutesGroup(),
  };
}
