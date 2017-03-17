
// navigates without page reload
import { waitForUrl } from './waits';

const navigateWithFlowRouter = (url) => {
  const { FlowRouter } = require('meteor/kadira:flow-router');

  FlowRouter.go(url);
};
export default (url) => {
  browser.execute(navigateWithFlowRouter, url);
  waitForUrl(`http://localhost:3000${url}`);
};
