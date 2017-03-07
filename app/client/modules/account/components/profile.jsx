import React from 'react';
import { T } from '@panter/manul-i18n';
import styled from 'styled-components';

const ProfileBase = styled.div`
  padding: 10px;
`;
ProfileBase.displayName = 'ProfileBase';

const Profile = ({}) => (
  <ProfileBase>
    Profile
  </ProfileBase>
);

Profile.propTypes = {
};

Profile.defaultProps = {
};

Profile.displayName = 'Profile';

export default Profile;
