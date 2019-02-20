import React from 'react';
import cx from 'classnames'
import globalStyles from 'assets/global-styles/bootstrap.min.module.css';

const Button = ({ label = '', type = 'button', disabled=false, BtnClass=null, onClick = () => null }) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={BtnClass ? BtnClass : cx(globalStyles.btn, globalStyles['btn-outline-primary'], globalStyles['btn-block'])}
  >
    {label}
  </button>
);

export default Button;