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
