import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as operations from '../../redux/operations';
import UserCard from '../../components/UserCard';
import Button from '../../components/common/Button';

class Users extends Component {
    componentDidMount() {
        this.props.getUsers();
    }
    render() {
      const {users, signOut} = this.props
      return (
        <div>
          <Button label="LOGOUT" onClick={signOut} />
          <div style={{display: 'flex', flexDirection: 'row'}}>
            {users.map(user => (<UserCard {...user} key={user.avatar + user.first_name} />))}
          </div>
        </div>
      );
    }
  }

const mapState = state => ({
    users: state.users
  });
  
  const mapDispatch = {
    getUsers: operations.getUsers,
    signOut: operations.signOut
  };

  export default connect(mapState, mapDispatch)(Users);