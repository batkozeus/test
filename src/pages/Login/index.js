import React, { Component } from 'react';
import SignUpForm from '../../components/SignUpForm';

export default class SignUp extends Component {
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 500 }}>
          Create your acccount for free
        </h1>
        <SignUpForm />
      </div>
    );
  }
}