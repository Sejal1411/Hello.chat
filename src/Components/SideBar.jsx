import React from 'react'
import './myStyles.css';
import Conversations from "./Conversations";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';

function SideBar() {
  const [conversation, setConversation] = useState([
    {
      name: "Test#1",
      lastMessage: "Last Message #1",
      timeStamp: "today",
    }, 

    {
      name: "Test2",
      lastMessage: "Last Message #2",
      timeStamp: "today",
    }, 

    {
      name: "Test#3",
      lastMessage: "Last Message #3",
      timeStamp: "today",
    }, 
  ])
  return (
    <div className='sidebar-container'>
      <div className='sb-header'>
        <div>
        <IconButton>
        <AccountCircleIcon />
        </IconButton>
        </div>
        
        <div>
        <IconButton>
        <PersonAddAlt1Icon />
        </IconButton>
        <IconButton>
        <GroupAddIcon />
        </IconButton>
        <IconButton>
        < AddCircleIcon/>
        </IconButton>
        <IconButton>
        <DarkModeIcon />
        </IconButton>
        </div>
        
        
      </div>
      <div className='sb-search'>
      <SearchIcon />
      <input placeholder="Search" className='search-box'/>
      </div>

      <div className='sb-conversations'>
      {Conversations.map((conversation) => {
        return <Conversations props={conversation} />
      })}

      </div>
    </div>
  )
}

export default SideBar
