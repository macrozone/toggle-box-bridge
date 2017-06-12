import * as Collections from '/lib/collections';
import { Roles } from 'meteor/alanning:roles';
import React from 'react';
import moment from 'moment';

/**
admin config is shared between clinet and server whereas
adminContext is usually ony on the client
**/
export default {
  allowRules: [
    userId => Roles.userIsInRole(userId, 'admin'),
  ],
  collections: {
    users: {
      collection: Collections.Users,
      title: 'Users',
      columns: ['emails.0.address', 'profile.firstname', 'profile.lastname', 'createdAt'],
      // TODO: the config should not container components (atm)
      // better to configure here the collection
      // OR: allow to extend config in the context
      columnMetadata: [
        {
          columnName: 'createdAt',
          customComponent: ({ data }) => <span>{moment(data).format('DD.MM.YYYY HH:mm')}</span>,
        },
      ],
    },
    translations: {
      collection: Collections.Translations,
      title: 'Translations',
      allowInsertWithId: true,
      columns: ['_id', 'value_de', 'value_en', 'value_fr', 'value_it'],
    },
    entities: {
      collection: Collections.Entities,
      title: 'Entities',
      columns: ['_id', 'title'],
    },
  },
};
