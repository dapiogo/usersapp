import React from 'react';
import styles from '../../components/List/ListItem.module.scss';

const ListItem = ({ id, name, username }) => (
    <li className={styles.wrapper__item}>
        <div className={styles.wrapper__item_id}>{id}</div>
        <div className={styles.wrapper__item_description}>
            <p>{name}</p>
            <span>{`@${username}`}</span>
        </div>
    </li>
);


export default ListItem;