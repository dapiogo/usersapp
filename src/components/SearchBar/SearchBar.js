import React from 'react';
import styles from './SearchBar.module.scss';
import { translation } from '../../assets/translation/translation';


const SearchBar = ({value,searchFn}) => (
    <div className={styles.wrapper}>
        <input className={styles.wrapper__input} type="text" placeholder={translation.placeholder} value={value} onChange={searchFn}/>
    </div>
);

export default SearchBar;