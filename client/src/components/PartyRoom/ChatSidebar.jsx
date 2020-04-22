import React from 'react';
import ChatPeopleList from './ChatPeopleList.jsx';
import ChatDetails from './ChatDetails.jsx';
import GameRules from './GameRules.jsx';
import AssignCharacter from './AssignCharacter.jsx';

const ChatSidebar = ({ users, partyInfo }) => {
  return (
    <div className="container">
      <ChatPeopleList users={users} />
      <ChatDetails partyInfo={partyInfo} />
      <GameRules />
      <AssignCharacter users={users} />
    </div>
  );
}

export default ChatSidebar;
