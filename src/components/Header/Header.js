import React from 'react';
import styles from './Header.module.scss';
import logoImage from '../../assets/img/logo.svg';
import { translation } from '../../assets/translation/translation'; 

const Header = () => (
  <header >
    <div className={styles.wrapper}>
        <img className={styles.wrapper__logo} src={logoImage} alt="user logo" />
        <h1 className={styles.wrapper__title}>{translation.usersListTile}</h1>
    </div>
  </header>
);

export default Header;