import { createApp } from 'mantra-core';
import initContext from './configs/context';

// modules
import coreModule from './modules/core';
import adminModule from './modules/admin';
import { adminModule as manulAdminModule } from '@panter/manul-admin';
// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(adminModule);
app.loadModule(manulAdminModule);
app.init();
