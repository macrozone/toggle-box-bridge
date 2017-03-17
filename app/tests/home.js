import navigate from './helpers/navigate';
import { waitForUrl } from './helpers/waits';

describe('home', function () {
  beforeEach(function () {
    navigate('/de');
  });

  it('should display title, login and register', function () {
    expect(browser.waitForExist('[data-testId=home-title]')).to.be.true;
    expect(browser.waitForExist('[data-testId=home-register-button]')).to.be.true;
    expect(browser.waitForExist('[data-testId=home-login-button]')).to.be.true;
  });

  it('should navigate to register page', function () {
    browser.waitForExist('[data-testId=home-register-button]');
    browser.click('[data-testId=home-register-button]');
    expect(waitForUrl('http://localhost:3000/de/register')).to.be.true;
    navigate('/de');
  });

  it('should navigate to login page', function () {
    browser.waitForExist('[data-testId=home-login-button]');
    browser.click('[data-testId=home-login-button]');
    expect(waitForUrl('http://localhost:3000/de/login')).to.be.true;
    navigate('/de');
  });
});
