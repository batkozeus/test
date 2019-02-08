import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import LoginRoute from '../../components/LoginRoute';
import ProtectedRoute from '../../components/ProtectedRoute';
import Login from '../../pages/Login';
import Users from '../../pages/Users';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
            <LoginRoute
                exact
                path="/"
                redirectTo="/users"
                component={Login}
            /> 
            <ProtectedRoute
                path="/users"
                redirectTo="/"
                component={Users}
            /> 
        </Switch>
      </div>
    );
  }
}

export default App;