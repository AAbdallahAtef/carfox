import React, {Component} from 'react';
import "../Style/Chat.css"
import ChatList from "../Component/chatList"
import ChatContent from "../Component/chatContent"

class ChatPage extends Component {

  render() {
    return (
      <div className='containersForChat'>
        <ChatList/>
        <ChatContent />
      </div>
    );
  }
}

export default ChatPage;
