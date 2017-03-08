import { T } from '@panter/manul-i18n';
import React from 'react';

import ButtonGroup from '../../../core/components/button_group';
import SubmitField from '../fields//SubmitField';

const FormActions = ({ submitLabel, children }) => (
  <ButtonGroup>
    {children}
    <SubmitField label={submitLabel} />
  </ButtonGroup>
);


FormActions.displayName = 'FormActions';

FormActions.defaultProps = {
  submitLabel: <T>autoform.defaults.submit</T>,
};

export default FormActions;
