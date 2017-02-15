import React from 'react';
import { T } from '@panter/manul-i18n';
import styled, { css } from 'styled-components';


const C = ({ href, className, style, children, label, onClick, type }) => {
  const Tag = href ? 'a' : 'button';
  return (
    <Tag className={className} style={style} href={href} onClick={onClick} type={type}>
      {children || label}
    </Tag>
  );
};

const Button = styled(C)`
  padding: 10px;
`;

Button.propTypes = {
};

Button.defaultProps = {
};

Button.displayName = 'Button';

export default Button;
