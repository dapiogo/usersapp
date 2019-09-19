import React from 'react';
import styles from './SearchBar.module.scss';

const SearchBar = ({value,searchFn}) => (
    <div className={styles.wrapper}>
        <input type="text" value={value} onChange={searchFn}/>
    </div>
);

export default SearchBar;