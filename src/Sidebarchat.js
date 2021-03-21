import React, { useState } from 'react';
import './Sidebarchat.css';
import { Avatar } from '@material-ui/core';
import {useEffect} from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';

function Sidebarchat({addnewChat}) {

    const [seed,setSeed] = useState("");

useEffect(() => {

    setSeed(Math.floor(Math.random() * 5000));

},[]);

const createChat = () => {
    const roomName = prompt('Enter room name for the chat');

    if (roomName) {
        //to do
    }
};

    return !addnewChat ? (
        <div className="sidebarChat">
        <Avatar src= {`https://avatars.dicebear.com/api/human/${seed}.svg`}/>

        <div className="sidebarChat__info">

            <h2>Room name</h2>
            <p>Last message</p>

        </div>
            
        </div>
    ) : (
        <div onClick={createChat}
        className="sidebarChat__addChat">
            <h2>Add new chat</h2>
            <AddCircleIcon className="addchaticon"/>

            
        </div>

    );
}

export default Sidebarchat