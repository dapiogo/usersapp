import React from 'react';

const ListItem = ({id, name, username}) => (
    <li>
        <div>{id}</div>
        <div>
            <p>{name}</p>
            <span>{`@${username}`}</span>
        </div>
    </li>
);


export default ListItem;