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
      message: '',
      messages: [],
    };
  }

  render() {

    const { people, messages } = this.state;
    const { partyInfo } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="chatRoomContainer col-md-8">
            {/* <ChatBoard message={message} messages={messages} partyInfo={partyInfo} /> */}
            <div className="container">

              <div className="row">
                <h3>Welcome to the {partyInfo.name}</h3>
              </div>

              <div>
                <h5>Party Details:</h5>
                <p>{partyInfo.details}</p>
              </div>

              <div className="row">
                <div className="messages-box col-md-12">
                  {messages.map((message) =>
                    <div className="message" key={message.id}>{message.message}</div>
                  )}
                </div>
              </div>

              <div className="row">
                <div className="send-a-message-box col-md-12">
                  <div className="form-group">
                    {/* changed for to className inside of label tag */}
                    <label className="send-a-message"></label>
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="howdy!"></input>
                    <button type="button" className="btn btn-primary btn-lg btn-block">Send Message</button>
                    <button onClick={this.sendMessage} className="btn btn-primary form-control">Send</button>
                  </div>
                </div>
              </div>

            </div>
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

// import React from 'react';
// import ChatBoard from './ChatBoard.jsx';
// import ChatPeopleList from './ChatPeopleList.jsx';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// class ChatRoom extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       people: [],
//       messages: [],
//     };
//     this.getMessages = this.getMessages.bind(this);
//   }

//   componentDidMount() {
//     this.getMessages();
//   }

//   getMessages() {
//     axios.get('/api/chatRoom')
//       .then((response) => this.setState({ messages: response.data }))
//       .catch((error) => { throw error; });
//   }

//   render() {
//     const { people, messages } = this.state;
//     const { partyInfo } = this.props;
//     const socket = io();
//     socket.on('message', message => {
//       console.log(message);
//     })
//     return (
//       <div className="container">
//         <div className="row">
//           <div className="chatRoomContainer col-md-8">
//             <ChatBoard messages={messages} partyInfo={partyInfo} />
//           </div>
//           <div className="chatPeopleListContainer col-md-4">
//             <ChatPeopleList people={people} />
//           </div>
//           <Link to={{ pathname: '/parties' }}>
//             <button
//               type="button"
//               className="btn btn-primary"
//             >Leave Party</button>
//           </Link>
//         </div>
//       </div>
//     );
//   }
// }

// export default ChatRoom;
