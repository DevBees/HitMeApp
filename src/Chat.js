import { Avatar, IconButton} from '@material-ui/core';
import { AttachFile, InsertEmoticon, SearchOutlined, Mic } from '@material-ui/icons';
import MoreVert from '@material-ui/icons/MoreVert';
import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import './Chat.css';
import db from './firebase';

function Chat() {

    const [seed,setSeed] = useState("");
    const [input,setInput] = useState("");
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState("");
    const [messages,setMessages] = useState([]);

    useEffect(() => {
        if(roomId) {
            db.collection("rooms")
            .doc(roomId)
            .onSnapshot((snapshot) => setRoomName
            (snapshot.data().name));


            db.collection("rooms")
            .doc(roomId)
            .collection("messages")
            .orderBy("timestamp" , "asc")
            .onSnapshot((snapshot) => 
                        setMessages(snapshot.docs.map((doc) =>
                            doc.data()
                            ))

                );
        }
    },[roomId, setRoomName]);

    useEffect(() => {

        setSeed(Math.floor(Math.random() * 5000));
    
    },[]);

    const sendMessage = (e) => {
        e.preventDefault();

        setInput("");

    }

    return (
        <div className="chat">

        <div className="chat__header">

        <Avatar src= {`https://avatars.dicebear.com/api/human/${seed}.svg`}/>

        <div className="chat__headerInfo">

            <h3>{roomName}</h3>
            <p>last seen an hr ago</p>

        </div>

        <div className="chat__headerRight">

            <IconButton>
                <SearchOutlined/>
            </IconButton>

            <IconButton>
            <AttachFile/>
            </IconButton>

            <IconButton>
                <MoreVert/>
            </IconButton>

        </div>

        </div>


        <div className="chat__body">

        {messages.map((message) =>
        (
            <p className="chat__message">
               <span className="chat__name">{message.name}</span>
                {message.message}
                <span className="chat__timestamp">
                    {new Date(message.timestamp?.toDate()
                    ).toUTCString()}
                </span>
                </p>

        ))}

         

        </div>


        <div className="chat__footer">

       <InsertEmoticon/>

       <form>
           <input value= {input} onChange={e => setInput(e.target.value)} type="text" placeholder="Type your message..." />

            <button className="sendButton" onClick={sendMessage} type="submit"></button>

       </form>
       
       <Mic/>


        </div>

            
        </div>
    )
}

export default Chat
