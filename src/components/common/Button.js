import React from 'react';

const Button = ({ label = '', type = 'button', onClick = () => null }) => (
  <button type={type} onClick={onClick} >
    {label}
  </button>
);

export default Button;