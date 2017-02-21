import './i18n';
import publications from './publications';
import methods from './methods';
import { Meteor } from 'meteor/meteor';

import { Counts } from 'meteor/tmeasday:publish-counts';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { initAdminServer } from '@panter/manul-admin';

import adminConfig from '/admin_config';
import importI18nSeed from './import_i18n_seed';

publications();
methods();


importI18nSeed();
initAdminServer({ Meteor, ValidatedMethod, Counts }, adminConfig);
