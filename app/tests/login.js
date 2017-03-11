import './helpers/fixtures';
import navigate from './helpers/navigate';
import { logout, getUserProperty } from './helpers/user';
import { waitForUrl } from './helpers/waits';

describe('login @watch', function () {
  beforeEach(function () {
    navigate('/de/login');
  });

  beforeEach(function () {
    browser.executeAsync(logout);
  });

  it('shows login form', function () {
    expect(browser.waitForExist("input[name='email']")).to.be.true;
    expect(browser.waitForExist("input[name='password']")).to.be.true;
    expect(browser.waitForExist("[type='submit']")).to.be.true;
  });

  it('shows a back button that goes home', function () {
    expect(browser.waitForExist('=Back')).to.be.true;
    browser.click('=Back');
    expect(waitForUrl('http://localhost:3000/de')).to.be.true;
    navigate('/de/login');
  });

  it('allows to login and goes home afterwards', function () {
    expect(browser.waitForExist("[type='submit']")).to.be.true;
    browser.setValue("input[name='email']", 'heinz@panter.ch');
    browser.setValue("input[name='password']", 'heinzheinzson2017');
    browser.click("[type='submit']");
    browser.pause(1000);
    expect(waitForUrl('http://localhost:3000/de')).to.be.true;
    const email = browser.execute(getUserProperty, 'emails[0].address').value;
    expect(email).to.equal('heinz@panter.ch');
  });
});
