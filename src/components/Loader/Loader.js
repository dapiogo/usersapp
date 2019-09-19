import React from 'react';
import styles from './Loader.module.scss';
import { loadingData } from '../../assets/translation/translation';

const Loader = () => (
    <div className={styles.wrapper}>
        <div className={styles.loading}></div>
        <p>{loadingData}</p>
    </div>
);

export default Loader;