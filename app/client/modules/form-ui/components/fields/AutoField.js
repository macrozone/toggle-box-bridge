import connectField from 'uniforms/connectField';
import invariant from 'fbjs/lib/invariant';
import { createElement } from 'react';

import NumField from './NumField';
import BoolField from './BoolField';
import DateField from './DateField';
import ListField from './ListField';
import NestField from './NestField';
import TextField from './TextField';
import RadioField from './RadioField';
import SelectField from './SelectField';


const Auto = (props) => {
  let component = props.component;
  if (component === undefined) {
    if (props.allowedValues) {
      if (props.checkboxes && props.fieldType !== Array) {
        component = RadioField;
      } else {
        component = SelectField;
      }
    } else {
      switch (props.fieldType) {
        case Date: component = DateField; break;
        case Array: component = ListField; break;
        case Number: component = NumField; break;
        case Object: component = NestField; break;
        case String: component = TextField; break;
        case Boolean: component = BoolField; break;
        default: throw new Error(`Unsupported component type: ${component}`);
      }

      invariant(component, 'Unsupported field type: %s', props.fieldType.toString());
    }
  }

  return createElement(component, props);
};

export default connectField(Auto, { ensureValue: false, includeInChain: false, initialValue: false });
