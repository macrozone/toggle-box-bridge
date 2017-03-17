export default {
  registration: {
    register({ Accounts, Alerts, manulRouter }, { email, password, ...profile }, onError) {
      Accounts.createUser(
        { email, password, profile },
        Alerts.handleCallback('registration.register', (error) => {
          if (error) {
            onError;
          } else {
            manulRouter.go('home');
          }
        })
      );
    },
  },
};
