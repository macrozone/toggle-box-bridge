import QuickForm from 'uniforms/QuickForm';

import BaseForm from './BaseForm';
import AutoField from '../fields/AutoField';
import ErrorsField from '../fields//ErrorsField';
import SubmitField from '../fields//SubmitField';
import React from 'react';

const Quick = parent => class extends QuickForm.Quick(parent) {
  static Quick = Quick;
  /* eslint class-methods-use-this: 0*/
  getAutoField() {
    return AutoField;
  }

  getErrorsField() {
    return ErrorsField;
  }

  getSubmitField() {
    return props => <SubmitField {...props} label={this.props.submitLabel} />;
  }
};

export default Quick(BaseForm);
