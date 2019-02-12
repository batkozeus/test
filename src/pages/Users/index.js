import React, { Component } from 'react';
import { connect } from 'react-redux';
import Transition from 'react-transition-group/Transition';
import * as actions from '../../redux/actions';
import UserCard from '../../components/UserCard';
import Button from '../../components/common/Button';

const duration = 500;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
    display: 'flex',
    flexDirection: 'row'
};

const transitionStyles = {
    entering: { opacity: 0 },
    entered:  { opacity: 1 }
};
class Users extends Component {
    state= { shown: false };

    componentDidMount() {
        this.props.getUsers();
    }

    toggleEnterState = () => {
        this.setState(prevState => ({ shown: !prevState.shown }));
    }

    render() {
        const {users, signOut} = this.props;
        const {shown} = this.state;
        return (
            <div style={{ display: 'flex', justifyContent: 'center'}}>
                {!users ?
                <div>Loading</div> :
                (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin:10}}>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Button label="Show users" onClick={this.toggleEnterState} />
                            <Button label="LOGOUT" onClick={signOut} />
                        </div>
                        <Transition in={shown} timeout={duration}>
                            {(state) => (
                                <div  style={{
                                    ...defaultStyle,
                                    ...transitionStyles[state]
                                }}>
                                    {users.map(user => (<UserCard {...user} key={user.avatar + user.first_name} />))}
                                </div>
                            )}
                        </Transition>
                    </div>
                )
                }
            </div>
            
        );
    }
}

const mapState = state => ({
    users: state.users
  });
  
  const mapDispatch = {
    getUsers: actions.getUsersSaga,
    signOut: actions.signOutSaga
  };

  export default connect(mapState, mapDispatch)(Users);