
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

const LoginRoute = ({
  component: Component,
  redirectTo = '/',
  isAuthenticated,
  ...rest
}) => {
  console.log('isAuthenticated: ', isAuthenticated)
  console.log('redirectTo: ', redirectTo)
  console.log('redirectTo: ', rest)
  return (
  <Route
    {...rest}
    render={props =>
      !isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={redirectTo}  />
      )
    }
  />
)};

const mapState = state => ({
  isAuthenticated: state.isAuthenticated
});

export default connect(mapState)(withRouter(LoginRoute));