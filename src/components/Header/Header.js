import React from 'react';
import styles from './Header.module.scss';
import logoImage from '../../assets/img/logo.svg';
import { usersListTile as title} from '../../assets/translation/translation'; 

const Header = () => (
  <header >
    <div className={styles.wrapper}>
        <img src={logoImage} alt="user logo" />
        <h1>{title}</h1>
    </div>
  </header>
);

export default Header;