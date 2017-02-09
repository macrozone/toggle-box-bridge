export default {

  upgradeToAdmin({ Meteor, Alerts, Methods, i18n }, userId) {
    Methods.users.upgradeToAdmin.call({ userId }, (err) => {
      if (err) {
        Alerts.show({ message: err.message });
      } else {
        Alerts.show({ message: i18n.t('user.admin.messages.upgradeToAdmin') });
      }
    });
  },
  revokeAdmin({ Meteor, Alerts, Methods, i18n }, userId) {
    Methods.users.revokeAdmin.call({ userId }, (err) => {
      if (err) {
        Alerts.show({ message: err.message });
      } else {
        Alerts.show({ message: i18n.t('user.admin.messages.revokeAdmin') });
      }
    });
  },
  editTranslation({ i18n, manulRouter }, translationId) {
    manulRouter.go('admin.translations.edit', { _id: translationId });
  },
};
