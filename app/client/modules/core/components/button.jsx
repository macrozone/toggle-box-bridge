import React from 'react';
import { T } from '@panter/manul-i18n';
import styled from 'styled-components';


const C = ({ href, className, style, children, label, onClick, type, testId }) => {
  const Tag = href ? 'a' : 'button';
  return (
    <Tag className={className} style={style} href={href} onClick={onClick} type={type} data-testId={testId}>
      {children || label}
    </Tag>
  );
};

const Button = styled(C)`
  padding: 10px;
  margin: 10px;
  border-radius: 4px;
  background-color: white;
  border-style: solid;
  border-width: 2px;
  border-color: black;
  font-size: 18px;
  text-align: center;
  text-decoration: none;
`;

Button.propTypes = {
};

Button.defaultProps = {
};

Button.displayName = 'Button';

export default Button;
