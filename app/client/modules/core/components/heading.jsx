import React from 'react';
import { T } from '@panter/manul-i18n';
import styled from 'styled-components';

const HeadingBase = styled.div`
  font-weight: bold;
  font-size: 22px;
`;
HeadingBase.displayName = 'HeadingBase';

const Heading = ({ children }) => (
  <HeadingBase>
    {children}
  </HeadingBase>
);

Heading.propTypes = {
};

Heading.defaultProps = {
};

Heading.displayName = 'Heading';

export default Heading;
