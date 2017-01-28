import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import Component from '../home';

test('title', (t) => {
  const wrapper = shallow(<Component />);
  t.truthy(wrapper);
});
