import React from 'react';
import { T } from '@panter/manul-i18n';
import styled from 'styled-components';
import AutoForm from '../../form-ui/components/forms/AutoForm';
import Center from '../../core/components/center';
import LinkButton from '../../core/containers/link_button';

const RegisterFormBase = styled.div`
  padding: 10px;
`;

RegisterFormBase.displayName = 'RegisterFormBase';

const RegisterForm = ({
  registerSchema,
  register,
}) => (
  <RegisterFormBase>
    <Center>
      <AutoForm
        schema={registerSchema}
        onSubmit={register}
        additionalActions={
          <LinkButton
            routeName="home"
          >
            <T>forms.back</T>
          </LinkButton>
      }
        submitLabel={<T>registration.register.submitlabel</T>}
      />
    </Center>
  </RegisterFormBase>
);

RegisterForm.propTypes = {
};

RegisterForm.defaultProps = {
};

RegisterForm.displayName = 'RegisterForm';

export default RegisterForm;
