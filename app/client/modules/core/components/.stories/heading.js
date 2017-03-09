import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Heading from '../heading';


storiesOf('core.Heading', module)
  .addWithDoc('default view', Heading,
  'This is the default view',
  () => {
    return (
      <Heading>
        This Is A Heading
      </Heading>
    );
  })
