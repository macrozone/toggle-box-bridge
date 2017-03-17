export default {
  account: {
    login({ Meteor, Alerts, manulRouter }, { email, password }) {
      Meteor.loginWithPassword(
        email, password,
        Alerts.handleCallback('account.login', {
          props: () => ({ email }),
        }, (error) => {
          if (!error) {
            manulRouter.go('home');
          }
        }
    ));
    },
    logout({ Meteor, Alerts, manulRouter }) {
      Meteor.logout(Alerts.handleCallback('account.actions.logout', (error) => {
        if (!error) {
          manulRouter.go('home');
        }
      }));
    },
  },
};
