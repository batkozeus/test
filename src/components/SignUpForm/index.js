import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector, change } from 'redux-form'
import * as operations from '../../redux/operations';
import Form from '../common/Form';
import FormField from '../common/FormField';
import Button from '../common/Button';

const selector = formValueSelector('login');

const validate = values => {
    const errors = {}
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.password) {
        errors.password = 'Required'
    } else if (values.password.length > 15) {
        errors.password = 'Must be 15 characters or less'
    } else if (values.password.length < 8) {
        errors.password = 'Must be 8 characters or more'
    }
    return errors
}


// const normalizeNumber = field => (value, previousValue, allValues) =>
// value * allValues[field]

const  SignUpForm = ({ error, handleSubmit, submitting, sendLoginData, initialNumberValue, dispatch }) => {
    const prepareLoginData = data => {
        sendLoginData(data);
    };

    const initialChange = (event) => {
        dispatch(change('login', 'multiplnumber', event.target.value));
    }

    return (
        <Form onSubmit={handleSubmit(prepareLoginData)}>
            <Field
                label="InitialNumber"
                type="text"
                name="initialnumber"
                placeholder="initialnumber"
                component={FormField}
                onChange={initialChange}
            />
            <Field
                label="MultiplyNumber"
                type="text"
                name="multiplnumber"
                placeholder="multiplnumber"
                component={FormField}
                // normalize={normalizeNumber('initialnumber')}
            />
            <Field
                label="Email"
                type="email"
                name="email"
                placeholder="example@mail.com"
                component={FormField}
            />
            <Field
                label="Password"
                type="password"
                name="password"
                component={FormField}
            />
            {error && <strong>{error}</strong>}
            <div>
                <Button label="Sign up" type="submit" disabled={submitting} />
            </div>
        </Form>
    );
}

const mapState = state => ({
    initialNumberValue: selector(state, 'initialnumber')
})

const mapDispatch = {
    sendLoginData: operations.signUp
};

const SignUpFormRedux = connect(
    mapState,
    mapDispatch
)(SignUpForm);

export default reduxForm({
    form: 'login',
    validate
})(SignUpFormRedux)