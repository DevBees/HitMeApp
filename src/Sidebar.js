import React from 'react';
import './Sidebar.css';
import SidebarChat from './Sidebarchat';
import { Avatar, IconButton} from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from '@material-ui/icons';



function Sidebar() {
    return (
        <div className="sidebar">

        <div className="sidebar__header">

        
        <IconButton>
        <Avatar/>
        </IconButton>

        <div className="sidebar__headerRight">

        <IconButton>    
        <DonutLargeIcon />
        </IconButton>

        <IconButton>
        <ChatIcon/>
        </IconButton>
        
        <IconButton>
        <MoreVertIcon/>
        </IconButton>


        </div>

        </div>

        <div className="sidebar__search">


        <div className="sidebar__SearchContainer">
        <SearchOutlined/>
        <input placeholder="Search or start new chat" type="text" />

        </div>


        </div>

        <div className="sidebar__chat">

        <SidebarChat/>
        <h1> chat </h1>
        <h1>chat</h1>


        </div>




            
        </div>
    )
}

export default Sidebar;
