import React from 'react';

const Link = ({raout}) => {
    return (
        <li className='mr-10'>
            <a href={raout.path}>{raout.name}</a>
        </li>
    );
};

export default Link;