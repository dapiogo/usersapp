import React from 'react';

const SearchBar = ({value,searchFn}) => {
    return (
        <div className="SearchBar">
            <input type="text" value={value} onChange={searchFn}/>
        </div>
    )
}

export default SearchBar;