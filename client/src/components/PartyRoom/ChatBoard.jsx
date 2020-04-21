import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

import ChatHeader from './ChatHeader.jsx';
import ChatSidebar from './ChatSidebar.jsx';
import Messages from './Messages.jsx'

let socket;

const ChatBoard = ({ partyInfo, username }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [room, setRoom] = useState(partyInfo.name);

  // DEVELOPMENT variable
  // const endPoint = 'localhost:8080';
  // PRODUCTION variable
  const endPoint = 'http://ec2-18-221-135-146.us-east-2.compute.amazonaws.com:8081/#/';

  useEffect(() => {
    socket = io(endPoint);
    socket.emit('join', { room, username }, () => { });

    return () => {
      socket.emit('disconnect');
      socket.off();
    }
  }, [])

  useEffect(() => {
    socket.on('receiveMessage', message => {
      setMessages(messages => [...messages, message]);
    });

    socket.on('usersInRoom', users => {
      setUsers(users);
    })
  }, []);

  const sendMessage = (event) => {
    event.preventDefault()
    if (message) {
      socket.emit('sendMessage', { message }, () => setMessage(''));
    }
  };

  const leftParty = () => {
    socket.emit('leaveParty', room);
  }

  return (
    <div className="container">
      <ChatHeader partyInfo={partyInfo} />
      <div class="row">
        <div class="col-md-10">
          <Messages messages={messages} message={message} setMessage={setMessage} sendMessage={sendMessage} leftParty={leftParty} />
        </div>
        <div class="col-md-2">
          <ChatSidebar users={users} partyInfo={partyInfo} />
        </div>
      </div>
    </div>
  );
}

export default ChatBoard;
