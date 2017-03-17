import QuickForm from 'uniforms/QuickForm';

import BaseForm from './BaseForm';
import AutoField from '../fields/AutoField';
import FormActions from './FormActions';
import React from 'react';
import { T } from '@panter/manul-i18n';


const Quick = parent => class extends QuickForm.Quick(parent) {
  static Quick = Quick;
  /* eslint class-methods-use-this: 0*/
  getAutoField() {
    return AutoField;
  }

  getErrorsField() {
    return () => null;
  }

  getSubmitField() {
    return props => (
      !props.hideSubmitField && <FormActions
        submitLabel={this.props.submitLabel}
      >{this.props.additionalActions}
      </FormActions>
  );
  }
};

export default Quick(BaseForm);
