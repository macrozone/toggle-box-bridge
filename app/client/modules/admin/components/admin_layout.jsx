import React from 'react';
import MainLayout from '../../core/components/main_layout';

const AdminLayout = ({ content }) => (<MainLayout content={content} />);

AdminLayout.propTypes = {
};

AdminLayout.defaultProps = {
};

AdminLayout.displayName = 'AdminLayout';

export default AdminLayout;
