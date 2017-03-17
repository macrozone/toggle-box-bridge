import React from 'react';
import { T } from '@panter/manul-i18n';
import styled from 'styled-components';
import Center from '../../core/components/center';
import Heading from '../../core/components/heading';
import LinkButton from '../../core/containers/link_button';
import Button from '../../core/components/button';

const ProfileBase = styled.div`
`;

ProfileBase.displayName = 'ProfileBase';

const Profile = ({ userProfile, isAdmin, logout }) => {
  if (!userProfile) return null;
  const { firstname, lastname } = userProfile.profile;

  return (
    <ProfileBase>
      <Center>
        <Heading>Profile</Heading>
        <h1>Firstname: {firstname}</h1>
        <h1>Lastname: {lastname}</h1>
        <h1>Email: {userProfile.emails[0].address}</h1>
        { isAdmin ?
          <LinkButton routeName="admin.index">
           Admin
          </LinkButton>
          :
          null
        }
        <Button onClick={logout}>
          Logout
        </Button>
      </Center>
    </ProfileBase>
  );
};

Profile.propTypes = {
};

Profile.defaultProps = {
};

Profile.displayName = 'Profile';

export default Profile;
