import React from 'react';

const Form = ({ onSubmit = () => null, children }) => (
  <form onSubmit={onSubmit} >
    {children}
  </form>
);

export default Form;