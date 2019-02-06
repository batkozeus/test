import React from 'react';

const Button = ({ label = '', type = 'button', disabled=false, onClick = () => null }) => (
  <button type={type} onClick={onClick} disabled={disabled} >
    {label}
  </button>
);

export default Button;