import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Center from '../center';


storiesOf('core.Center', module)
  .addWithDoc('default view', Center,
  'This is the default view',
  () => {
    return (
      <Center>
        Centered Content
      </Center>

    );
  })
