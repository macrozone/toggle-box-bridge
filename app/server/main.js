import './i18n';

import { initAdminServer } from '@panter/manul-admin';

import { Counts } from 'meteor/tmeasday:publish-counts';
import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import adminConfig from '/admin_config';

import importI18nSeed from './import_i18n_seed';
import methods from './methods';
import publications from './publications';

import SimpleSchema from 'simpl-schema';

publications();
methods();


importI18nSeed();
initAdminServer({ Meteor, ValidatedMethod, Counts, SimpleSchema }, adminConfig);
