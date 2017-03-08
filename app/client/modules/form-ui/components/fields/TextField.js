import React from 'react';
import connectField from 'uniforms/connectField';
import filterDOMProps from 'uniforms/filterDOMProps';
import styled from 'styled-components';

const TextInput = styled.input`
    border: none;
    width: 100%;
    font-size: 13px;
    border-width: 1px;
    border-style: solid;
    border-radius: 3px;
    padding: 7px;
    margin-top: 4px;
    margin-bottom: 4px;
`;
const Text = ({
    disabled,
    id,
    inputRef,
    label,
    name,
    onChange,
    placeholder,
    type,
    value,
    ...props
}) =>
  <div {...filterDOMProps(props)}>
    {label && (
    <label htmlFor={id}>
      {label}
    </label>
        )}

    <TextInput
      disabled={disabled}
      id={id}
      name={name}
      onChange={event => onChange(event.target.value)}
      placeholder={placeholder}
      ref={inputRef}
      type={type}
      value={value}
    />
  </div>
;

Text.defaultProps = {
  type: 'text',
};

export default connectField(Text);
