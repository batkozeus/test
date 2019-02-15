import React, { Suspense, lazy } from 'react';
import classes from './UserCard.module.css';


const UserCard = ({ first_name = '', last_name = '', avatar}) => () => (
  <div className={classes.container}>
    <img src={avatar} alt="avatar" className={classes.image} />
    <h1 className={classes.name}>{first_name}</h1>
    <h1 className={classes.name}>{last_name}</h1>
  </div>
);

const getLazyComponent = (props) =>
  lazy(() =>
    new Promise((resolve) => {
      resolve({
        default: UserCard(props)
      });
    }
  )
);

function ProgressiveUserCard(props) {
  const SimpleUserCard = UserCard(props);
  const LazyUserCard = getLazyComponent(props);

  return (
    <Suspense fallback={<SimpleUserCard />}>
      <LazyUserCard />
    </Suspense>
  );
}

export default ProgressiveUserCard;