import React from 'react';
import styled from 'styled-components';
import LinkButton from '../containers/link_button';
import Center from '../../core/components/center';

const HomeBase = styled.div`
`;

const HomeTitle = styled.h1`
  fontSize: 36px;
  fontWeight: bold;
`;

const Home = () => (
  <HomeBase>
    <Center>
      <HomeTitle data-testId="home-title">Boilerplate</HomeTitle>
      <LinkButton testId="home-register-button" routeName="register">
        Register
      </LinkButton>
      <LinkButton testId="home-login-button" routeName="login">
        Login
      </LinkButton>
    </Center>
  </HomeBase>
);


export default Home;
