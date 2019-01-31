
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const LoginRoute = ({
  component: Component,
  redirectTo = '/',
  isAuthenticated,
  ...rest
}) => {
  return (
  <Route
    {...rest}
    render={props =>
      !isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: redirectTo,
            state: { from: props.location }
          }}
        />
      )
    }
  />
)};

const mapState = state => ({
  isAuthenticated: state.isAuthenticated
});

export default connect(mapState)(LoginRoute);