import React from 'react';
import styled from 'styled-components';
import colors from '/lib/styles/colors';
import { AlertsStack } from '@panter/manul-alerts';


const LayoutBase = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  overflow: auto;
  background-color: ${colors.lightblue};
`;


const Layout = ({ content = () => null, contentNotLoggedIn = () => null, user }) => (
  <LayoutBase>
    {user ? content() : contentNotLoggedIn()}
    <AlertsStack
      styles={{ titleStyle: { color: colors.darkblue }, actionStyle: { color: colors.darkblue } }}
      stylesError={{ titleStyle: { color: colors.error } }}
    />
  </LayoutBase>
);

export default Layout;
