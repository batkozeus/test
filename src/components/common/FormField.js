import React from 'react';
import Input from './Input';
import Label from './Label';
import globalStyles from 'assets/global-styles/bootstrap.min.module.css';

const FormField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
      <Label text={label} />
      <div>
        <Input {...input} type={type} />
        {touched && error && <span className={globalStyles['text-danger']}>{error}</span>}
      </div>
    </div>
  )

export default FormField;