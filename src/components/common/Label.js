import React from 'react';

const Label = ({ text, children }) => (
  <label >
    <span>{text}</span>
    {children}
  </label>
);

export default Label;