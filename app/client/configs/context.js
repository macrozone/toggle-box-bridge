import * as Collections from '/lib/collections';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { ReactiveDict } from 'meteor/reactive-dict';
import { ReactiveVar } from 'meteor/reactive-var';
import { Tracker } from 'meteor/tracker';

import SimpleSchema from 'simpl-schema';

import moment from 'moment';
import momentDe from 'moment/locale/de';
import momentFr from 'moment/locale/fr';
import momentIt from 'moment/locale/it';

import ManulRouter from '@panter//manul-router';
import { I18n, T } from '@panter/manul-i18n';
import TranslationStore from '@panter/manul-i18n/dist/stores/collection';

import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';
import { MeteorGriddle } from 'meteor/panter:meteor-griddle';

import createAdminContext from './create_admin_context';

export default function () {
  const LocalState = new ReactiveDict();

  moment.defineLocale('fr', momentFr);
  moment.defineLocale('it', momentIt);
  moment.defineLocale('de', momentDe);

  const i18n = new I18n({
    supportedLocales: ['de', 'en', 'fr', 'it'],
    defaultLocale: 'de',
    translationStore: new TranslationStore({
      Meteor,
      ReactiveVar,
      collection: Collections.Translations,
    }),
  });

  const manulRouter = new ManulRouter(
    { FlowRouter, Meteor, i18n },
  );

  i18n.onChangeLocale(locale => moment.locale(locale));

  const context = {
    Meteor,
    manulRouter,
    SimpleSchema,
    LocalState,
    Collections,
    Tracker,
    i18n,
    gotoRoute: manulRouter.go.bind(manulRouter),
    localeRoutes: manulRouter.createLocaleRoutesGroup(),
    Config: Collections.Config,
    Roles,
    Accounts,
    MeteorGriddle,
  };
  context.adminContext = createAdminContext(context);
  return context;
}
