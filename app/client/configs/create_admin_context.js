import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Counts } from 'meteor/tmeasday:publish-counts';

import { createAdminContext } from '@panter/manul-admin';

import AdminLayout from '/client/modules/admin/containers/admin_layout';
import AdminPreview from '/client/modules/admin/containers/document_preview';
import AdminList from '/client/modules/admin/containers/list';
import AdminCreate from '/client/modules/admin/containers/create';
import AdminEdit from '/client/modules/admin/containers/edit';
import UsersEdit from '/client/modules/admin/containers/users_edit';


import adminConfig from '/admin_config';

export default ({ Alerts, gotoRoute, localeRoutes }) => {
  const adminRoutes = localeRoutes.group({
    prefix: '/admin',
    name: 'admin',
  });

  return createAdminContext({
    // needed
    Meteor,
    ValidatedMethod,
    Counts,

    config: adminConfig,
    adminRoutes,
    gotoRoute,
    showError(error) {
      Alerts({ message: error.reason || error.message });
    },
    showSuccess(message) {
      Alerts({ message });
    },
    components: {
      layout: AdminLayout,
      list: AdminList,
      create: AdminCreate,
      preview: AdminPreview,
      edit: {
        users: UsersEdit,
        default: AdminEdit,
      },
    },
  });
};
