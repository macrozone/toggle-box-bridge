import React from 'react';
import { T } from '@panter/manul-i18n';
import styled from 'styled-components';
import AutoForm from '../../form-ui/components/forms/AutoForm';
import Center from '../../core/components/center';
import LinkButton from '../../core/containers/link_button';

const LoginBase = styled.div`
`;
LoginBase.displayName = 'LoginBase';

const Login = ({ loginSchema, login }) => (
  <LoginBase>
    <Center>
      <AutoForm
        schema={loginSchema}
        onSubmit={login}
        additionalActions={
          <LinkButton
            routeName="home"
          >
            <T>forms.back</T>
          </LinkButton>
      }
        submitLabel={<T>account.login.submitlabel</T>}
      />
    </Center>
  </LoginBase>
);

Login.propTypes = {
};

Login.defaultProps = {
};

Login.displayName = 'Login';

export default Login;
