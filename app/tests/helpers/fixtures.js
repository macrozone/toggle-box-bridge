import { removeUsers, createUser, createUser2, createAdmin, logout } from './user';

before(function () {
  server.execute(() => {
    const { Accounts } = require('meteor/accounts-base');

    Accounts.removeDefaultRateLimit();
  });
  server.execute(removeUsers);
  server.execute(createUser);
  server.execute(createUser2);
  server.execute(createAdmin);
  browser.timeouts('implicit', 1000);
  browser.timeoutsImplicitWait(1000);
  browser.timeoutsAsyncScript(1000);
  browser.url('http://localhost:3000');
  browser.executeAsync(logout);
});


after(function () {
  server.execute(removeUsers);
});
