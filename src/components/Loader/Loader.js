import React from 'react';
import styles from './Loader.module.scss';
import { translation } from '../../assets/translation/translation';

const Loader = () => (
    <div className={styles.wrapper}>
        <div className={styles.wrapper__loading}></div>
        <p>{translation.loadingData}</p>
    </div>
);

export default Loader;