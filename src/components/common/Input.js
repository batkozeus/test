import React from 'react';
import cx from 'classnames'
import globalStyles from 'assets/global-styles/bootstrap.min.module.css';

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
    className={cx(globalStyles['form-control'], globalStyles['mb-2'])}
  />
);

export default Input;