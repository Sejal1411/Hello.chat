import React from 'react';
import './myStyles.css';
import SideBar from "./SideBar";
import Conversations from "./Conversations";
import ChatArea from "./ChatArea";



function MainContainer() {
  return (
    <div className='main-container'>
      <SideBar />
      <ChatArea />
      <Conversations />
    </div>
  )
}

export default MainContainer
