import React, { useState } from 'react';
import './Sidebarchat.css';
import { Avatar } from '@material-ui/core';
import {useEffect} from 'react';

function Sidebarchat() {

    const [seed,setSeed] = new useState('');

useEffect(() => {

    setSeed(Math.floor(Math.random() * 5000));

},);

    return (
        <div className="sidebarChat">
        <Avatar src= {`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
        <div className="sidebarChat__info">

            <h2> Room name</h2>
            <p>Last message</p>
            
        </div>
            
        </div>
    )
}

export default Sidebarchat


