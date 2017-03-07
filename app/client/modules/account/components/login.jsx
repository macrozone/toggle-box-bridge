import React from 'react';
import { T } from '@panter/manul-i18n';
import styled from 'styled-components';
import AutoForm from '../../form-ui/components/forms/AutoForm';
import Center from '../../core/components/center';

const LoginBase = styled.div`
`;
LoginBase.displayName = 'LoginBase';

const Login = ({ loginSchema, login }) => (
  <LoginBase>
    <Center>
      <AutoForm
        schema={loginSchema}
        onSubmit={login}
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
