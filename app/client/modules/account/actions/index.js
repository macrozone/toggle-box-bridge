export default {
  account: {
    login({ Meteor, Alerts, manulRouter }, { email, password }) {
      Meteor.loginWithPassword(
        email, password,
        Alerts.handleCallback('account.login', {
          props: () => ({ email }),
        }, (error) => {
          if (!error) {
            manulRouter.go('myProfile');
          }
        }
    ));
    },
  },
};
