import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as operations from '../../redux/operations';
import Form from '../common/Form';
import Input from '../common/Input';
import Label from '../common/Label';
import Button from '../common/Button';

const INITIAL_STATE = {  email: '', password: '' };

class SignUpForm extends Component {
  state = { ...INITIAL_STATE };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit({ ...this.state });

    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { email, password } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Label text="Email">
          <Input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="example@mail.com"
          />
        </Label>

        <Label text="Password">
          <Input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </Label>

        <Button label="Sign up" type="submit" />
      </Form>
    );
  }
}

const mapDispatch = {
  onSubmit: operations.signUp
};

export default connect(
  null,
  mapDispatch
)(SignUpForm);