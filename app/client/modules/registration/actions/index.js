export default {
  registration: {
    register({ Accounts, Alerts, manulRouter }, { email, password }, onError) {
      Accounts.createUser(
        { email, password },
        Alerts.handleCallback('registration.register', (error) => {
          if (error) {
            onError;
          } else {
            manulRouter.go('myProfile');
          }
        })
      );
    },
  },
};
