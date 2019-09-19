import React from 'react';
import ListItem from '../ListItem/ListItem';
import NoResult from '../NoResult/NoResult';
import styles from './ListItem.module.scss';

const List = ({ users }) => {
    if (users.length) {
        return (
          <ul className={styles.wrapper}>
            {users.map(user => <ListItem key={user.id} {...user}/>)}
          </ul>
        );
      }
      
      return (
        <NoResult/>
      );
};

export default List;