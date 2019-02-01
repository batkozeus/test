
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

const ProtectedRoute = ({
  component: Component,
  redirectTo = '/',
  isAuthenticated,
  ...rest
}) =>  (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={redirectTo} />
      )
    }
  />
);

const mapState = state => ({
  isAuthenticated: state.isAuthenticated
});

export default connect(mapState)(withRouter(ProtectedRoute));