import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Profile from '../profile';

const userProfile = {
  profile: {
  firstname: 'Heinz',
  lastname: 'McHeinzFace',},
  emails : [{address: 'heinz@wuhu.ch'}]
}
storiesOf('account.Profile', module)
  .addWithDoc('default view', Profile,
  'This is the default view',
  () => {
    return (
      <Profile userProfile={userProfile} />
    );
  })
