import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as operations from '../../redux/operations';

class Users extends Component {
    componentDidUpdate() {
        this.props.onSubmit();
    }
    render() {
      return (
        <div>Users</div>
      );
    }
  }

const mapState = state => ({
    users: state.users
  });
  
  const mapDispatch = {
    onSubmit: operations.getUsers
  };

  export default connect(mapState, mapDispatch)(Users);