# MANUL Boilerplate 

## Install
To use the boilerplate you need to install Meteor and Mantra-cli first.
You should also read the meteor mantra specification sice this 
boilerplate is based on it. We use mantra-cli to create new components,
collections etc.

**Meteor:**  
[https://www.meteor.com/install](https://www.meteor.com/install)

**Mantra:**  
[https://github.com/kadirahq/mantra](https://github.com/kadirahq/mantra)

**Mantra-cli:**  
[https://github.com/mantrajs/mantra-cli](https://github.com/mantrajs/mantra-cli)


## Important libraries

* **simpl-schema:**  
    Use simple-schema to validate our collections or to 
    create a form together with uniforms/autoform.  
    [https://github.com/aldeed/node-simple-schema](https://github.com/aldeed/node-simple-schema)  
* **uniforms:**  
    Used to create forms.
    [https://github.com/vazco/uniforms](https://github.com/vazco/uniforms)
* **styled-components:**  
    [https://github.com/styled-components/styled-components](https://github.com/styled-components/styled-components)  
* **uniforms:**  
    [https://github.com/vazco/uniforms](https://github.com/vazco/uniforms)  
* **manul-admin:**  
    Admin backend allows to modify collections.  
    [https://github.com/panter/manul-admin](https://github.com/panter/manul-admin)  
* **manul-alerts:**  
    Displays alerts similar to toasts.  
    [https://github.com/panter/manul-alerts](https://github.com/panter/manul-alerts)  
* **manul-i18n:**  
    translations.
    [https://github.com/panter/manul-i18n](https://github.com/panter/manul-i18n)  
* **manul-router:**  
    extension to flow router.  
    [https://github.com/panter/manul-router](https://github.com/panter/manul-router)
* **storyshots:**
    Snapshot testing ui components.  
    [https://github.com/storybooks/storyshots](https://github.com/storybooks/storyshots)
* **chimp:**
    Used to write end to end tests with mocha and
    webdriver.io.  
    [https://chimp.readme.io/](https://chimp.readme.io/)
* **husky:**  
    used for precommit hook.  
    starts eslint and storyshoots before commiting.
    [https://github.com/typicode/husky](https://github.com/typicode/husky)


## File structure
```
|__.gitignore
|__.gitlab-ci.yml  // config for Continious Integration & Continious Deployment
|__.gitmodules
|__app
| |__.babelrc
| |__.config
| | |__chimp.js  // chimp configuration
| |__.eslintcache
| |__.eslintrc
| |__.gitignore
| |__.scripts
| | |__chimp.js  // chimp start script. starts meteor server and chimp
| |__.storybook
| | |____storyshots__  // storyshot ".shot" files get stored here.
| | |__addons.js
| | |__config.js // storybook config
| | |__Storyshots.test.js  // jest file to create storyshots
| | |__webpack.config.js
| |__admin_config.js  // shared config for @panter/manul-admin
| |__client
| | |__configs
| | | |__context.js
| | | |__create_admin_context.js  // @panter/manul-admin
| | |__main.js
| | |__main.scss   // reset css & some global css rules or fonts
| | |__modules
| | | |__admin   // admin module for @panter/manul-admin. contains components used for manul-admin.
| | | | |__actions 
| | | | | |__admin.js
| | | | | |__index.js
| | | | |__components
| | | | | |__.stories
| | | | | | |__admin_home.js
| | | | | | |__create.js
| | | | | | |__document_preview.js
| | | | | | |__edit.js
| | | | | | |__index.js
| | | | | | |__list.js
| | | | | | |__users_edit.js
| | | | | |__admin_home.jsx
| | | | | |__admin_layout.jsx
| | | | | |__create.jsx
| | | | | |__document_preview.jsx
| | | | | |__edit.jsx
| | | | | |__list.jsx
| | | | | |__not_allowed_message.jsx
| | | | | |__users_edit.jsx
| | | | |__containers
| | | | | |__admin_layout.js
| | | | | |__create.js
| | | | | |__document_preview.js
| | | | | |__edit.js
| | | | | |__list.js
| | | | | |__users_edit.js
| | | | |__index.js
| | | | |__routes.jsx  // admin routes
| | | |__core
| | | | |__actions
| | | | | |__index.js
| | | | |__components
| | | | | |__.stories
| | | | | | |__index.js
| | | | | |__main_layout.jsx
| | | | |__containers
| | | | | |__main_layout.js
| | | | |__hocs
| | | | | |__restrict_to_roles.js  // used at the moment only by manul-admin to restict admin routs to user with the admin role
| | | | |__index.js
| | | | |__routes.jsx  // most routes are defined here. if the app growes it's possible to create multiple route files and store them inside of the module.
| |__lib
| | |__collections
| | | |__index.js
| | | |__translations.js // used for manul-i18n
| | |__polyfill.js
| | |__schemas
| | | |__index.js
| | | |__translations.js // used for manul-i18n
| | |__styles  // store of css default values or variables for styling
| | | |__colors.js
| |__mantra_cli.yaml  // mantra-cli config
| |__package.json
| |__private
| | |__i18n-seed
| | | |__de.yaml  // language file for i18n. content of this file will be stored into the translation connection on startup, if the key dosent exist in the collection.
| |__server
| | |__i18n.js  // contains a function to use i18n service on the server
| | |__import_i18n_seed.js  // checks if a key in de.yml dosen't exist and imports it.
| | |__main.js
| | |__methods
| | | |__index.js
| | |__publications
| | | |__index.js
| |__settings.json
| |__tests  // folder for e2e tests. used by chimp
| | |__helpers
| | | |__fixtures.js
| | | |__navigate.js // navigates without page reload
| | | |__waits.js  // url helper functions
| | |__home.js   // test file 
|__build-staging.sh  // build script used by gitlab-ci
|__deploy-staging.sh // deploy script used by gitlab-ci
|__README.md
|__test.sh  // test script used by gitlab-ci
```

Our root folder contains the config file for gitlab-ci and the scripts for the different stages (test, build and deploy).

The "app" folder is the mantra application created with mantra-cli. If you want to use our configuration for ci the name 
app is important.

## Configs

### Gitlab-ci
This configuration is more a example since it will change in different projects. For the boilerplate project 
we defined 3 stages.

**Test:**  
Uses the test.sh script which simply runs eslint and starts chimp to run the end to end tests.

**Build:**  
Starts the meteor build proccess. If you also use gitlab to deploy your app you can remove this stage and
build the app in the deploy proccess. This makes the ci a bit faster.

**Deploy:**  
Starts the deploy-staging.sh. In this project it deploys the app to heroku but you can deploy it anywhere you want.

**Important:**  
Keys or passwords usw are stored in gitlab as "secrect variables" and can then be used in the config as variables.
For example **_$HEROKU_API_KEY_** in the deploy-staging.sh.  
[secret-variables](https://docs.gitlab.com/ce/ci/variables/#secret-variables)

As Dockerimage we use [meteor-node](https://hub.docker.com/r/blurri/meteor-node/) normaly.  
In this project we use [meteor-node-heroku](https://hub.docker.com/r/blurri/meteor-node-heroku/) but thats only because we deploy  here to heroku.

For more information to gitlab-ci:  
[https://docs.gitlab.com/ce/ci/](https://docs.gitlab.com/ce/ci/)


### Chimp
Chimp is configured in two config files. First there ist a chimp.js file in the .config folder. This is the configuration of
chimp itself. For example we set the timeout in this project. 

The other more imporatnt file is the chimp.js in the .scripts folder. This script starts a meteor instance and runs chimp
and after chimp is done kills both proccesses. This is needed to run chimp in gitlab-ci. With only gitlab config you can not run 
two processes at the same time.

We use phantomjs as headless browser.

More information:  
[https://chimp.readme.io/](https://chimp.readme.io/)  
[https://mochajs.org/](https://mochajs.org/)  
[http://webdriver.io/](http://webdriver.io/)  


### Manul-admin
[https://github.com/panter/manul-admin](https://github.com/panter/manul-admin)


### Manul-i18n
[https://github.com/panter/manul-i18n](https://github.com/panter/manul-i18n)


### Manul-router
Manul router get configured in the mantra context:
```
const manulRouter = new ManulRouter(
    { FlowRouter, Meteor, i18n },
  );
```
[https://github.com/panter/manul-router](https://github.com/panter/manul-router)


### Mantra-cli
Mantra-cli is configured in the mantra_cli.yml file we overrid the default templates and disabled the 
unit tests.

More information:  
[https://github.com/mantrajs/mantra-cli#customization](https://github.com/mantrajs/mantra-cli#customization)


## Create modules, container, component or collection
To create a new module, container, component or collection use mantra-cli. It will generate all files
and stories for storybook.You should develop and design your components in storybook.

When you create a new collection put the schema definition into the "/lib/schema" folder. That makes it
easy to export a schema. If for example you need it in a component for a form.

## Testing

### End to end tests
We use mocha together with chimp to write our end to end tests.To write a new test you need to create a
file inside of the "/app/tests" folder.

We created a few helpers to work with chimp.
***fixtures.js*** creates data before all the tests run and removes it after the they finished.in this case they create users and removes them.

***navigate.js*** exports a function which lets you navigate with flow router.

***user.js*** exports helper functions to create, remove, login, logout and get user properties.

***waits.js*** exports two function to wait until url changed to a given url or until the url changes.

#### Example

```
import navigate from './helpers/navigate';
import { logout, getUserForEmail, removeUserForEmail } from './helpers/user';


const userEmail = 'heinz2@panter.ch';
const userPassword = 'heinzmcheinzface';
describe('signup', function () {
  beforeEach(function () {
    navigate('/de/register');
    server.execute(removeUserForEmail, userEmail);
  });

  beforeEach(function () {
    browser.executeAsync(logout);
  });


  it('shows signup form', function () {
    expect(browser.waitForExist("input[name='firstname']")).to.be.true;
    expect(browser.waitForExist("input[name='lastname']")).to.be.true;
    expect(browser.waitForExist("input[name='email']")).to.be.true;
    expect(browser.waitForExist("input[name='password']")).to.be.true;
    expect(browser.waitForExist("input[name='confirmPassword']")).to.be.true;
    expect(browser.waitForExist("[type='submit']")).to.be.true;
    expect(browser.waitForExist('=Back')).to.be.true;
  });

  it('should create a user', function () {
    browser.waitForExist("input[name='firstname']");
    browser.setValue("input[name='firstname']", 'Heinz');
    browser.setValue("input[name='lastname']", 'Heinzson');
    browser.setValue("input[name='email']", userEmail);
    browser.setValue("input[name='password']", userPassword);
    browser.setValue("input[name='confirmPassword']", userPassword);
    browser.click("[type='submit']");
    browser.pause(1000);
    const userOnServer = server.execute(getUserForEmail, userEmail);
    expect(userOnServer.emails[0].address).to.equal(userEmail);
  });
});
```

You can import helper functions into your tests and call them with the server or the
browser object.

If you want to run chimp on your local machine you have thee npm commands:
```
npm run chimp
```
Runs all tests once. But there must be a server running on port 3000.

```
npm run chimp-watch
```
Only runs tests with @watch or @focus. And there must be a server running on port 3000.

```
npm run ci
```
This command starts a server and runs all chimp tests once. It runs the tests with phantomjs.

More information:   
[https://chimp.readme.io/](https://chimp.readme.io/)


### Storyshots
We use storyshoots for snapshot testing. When ever someone wants to commit changes starts running and displays
your changes. If everything is okey the command **_update-storybook_** updates the existing shots and you
can commit.


## Npm run commands
**lint:** runs eslint  
**precommit:** runs eslint and storyshoots if errors prevents commit  
**storybook:** starts a storybook server on port 9001  
**chimp-watch:** starts a chimp instance which points to localhost:3000  
**chimp:** runs chimp tests once  
**ci:** starts meteor and chimp once  
**test-storybook:** runs storyshoots  
**update-storybook:** updates storyshoots  