import React from 'react';
import classes from './UserCard.module.css';

const UserCard = ({ first_name = '', last_name = '', avatar}) => (
  <div className={classes.container}>
    <img src={avatar} alt="avatar" className={classes.image} />
    <h1 className={classes.name}>{first_name}</h1>
    <h1 className={classes.name}>{last_name}</h1>
  </div>
);

export default UserCard;