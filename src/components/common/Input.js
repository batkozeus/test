import React from 'react';

const Input = ({
  type = 'text',
  name = '',
  value = '',
  onChange = () => null,
  placeholder = ''
}) => (
  <input
    type={type}
    onChange={onChange}
    name={name}
    value={value}
    placeholder={placeholder}
  />
);

export default Input;