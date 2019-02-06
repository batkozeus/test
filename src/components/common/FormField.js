import React from 'react';
import Input from './Input';
import Label from './Label';

const FormField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
      <Label text={label} />
      <div>
        <Input {...input} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  )

export default FormField;