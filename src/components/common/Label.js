import React from 'react';
import globalStyles from 'assets/global-styles/bootstrap.min.module.css';

const Label = ({ text }) => (
  <label className={globalStyles['font-weight-bold']}>
    {text}
  </label>
);

export default Label;