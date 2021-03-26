import React, { useState } from 'react';
import './Sidebarchat.css';
import { Avatar } from '@material-ui/core';
import {useEffect} from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import db from './firebase';
import {Link} from "react-router-dom";

function Sidebarchat({ id, name, addnewChat}) {

    const [seed,setSeed] = useState("");
    const [messages,setMessages] = useState("");

useEffect(() => {

    setSeed(Math.floor(Math.random() * 5000));

},[]);

useEffect(() =>{
        if(id){
            db.collection("rooms")
            .doc(id)
            .collection("messages")
            .orderBy("timestamp" , 'desc')
            .onSnapshot
            ((snapshot) => (
                setMessages(snapshot.docs.map((doc) =>
                doc.data()))
            ))
        }
},[])

const createChat = () => {
    const roomName = prompt('Enter room name for the chat');

    if (roomName) {
        //to do
        db.collection("rooms").add({
            name: roomName,

        });
    }
};

    return !addnewChat ? (
        <Link to={`/rooms/${id}`}>

<div className="sidebarChat">
        <Avatar src= {`https://avatars.dicebear.com/api/human/${seed}.svg`}/>

        <div className="sidebarChat__info">

            <h2 className="sidebarChat__heading">{name}</h2>
            <p>{messages[0]?.message}</p>

        </div>
            
        </div>

        </Link>
        
    ) : (
        <div onClick={createChat}
        className="sidebarChat__addChat">
            <h2>Add new chat</h2>
            <AddCircleIcon className="addchaticon"/>

            
        </div>

    );
}

export default Sidebarchat