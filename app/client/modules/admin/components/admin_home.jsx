import React from 'react';
import ButtonGroup from '../../core/components/button_group';
import LinkButton from '../../core/containers/link_button';


const AdminHome = ({}) => (
  <ButtonGroup>
    <LinkButton routeName="admin.translations.list">
        Translations
      </LinkButton>
  </ButtonGroup>
);

AdminHome.propTypes = {
};

AdminHome.defaultProps = {
};

AdminHome.displayName = 'AdminHome';

export default AdminHome;
