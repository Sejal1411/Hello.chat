import React from 'react'
import './myStyles.css';


function ChatArea() {
  return (
    <div className='chatArea-container'>
      <div className="chat-header">Header</div>
      <div className="msg-container">Messages-container</div>
      <div className="text-area">Text-Container</div>
    </div>
  )
}

export default ChatArea;
