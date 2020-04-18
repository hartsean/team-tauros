import React from 'react';
import ChatBoard from './ChatBoard.jsx';
import ChatPeopleList from './ChatPeopleList.jsx';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      messages: [],
    };
    this.getMessages = this.getMessages.bind(this);
  }

  componentDidMount(){
    this.getMessages();
  }

  getMessages(){
    axios.get('/api/chatRoom')
      .then((response) => this.setState({ messages: response.data }))
      .catch((error) => { throw error; });
  }

  render() {
    const { people, messages } = this.state;
    const { partyInfo } = this.props;
    const socket = io();
    return (
      <div className="container">
        <div className="row">
          <div className="chatRoomContainer col-md-8">
            <ChatBoard messages={messages} partyInfo={partyInfo}/>
          </div>
          <div className="chatPeopleListContainer col-md-4">
            <ChatPeopleList people={people} />
          </div>
          <Link to={{ pathname: '/parties' }}>
          <button
            type="button"
            className="btn btn-primary"
          >Leave Party</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default ChatRoom;
