import React from 'react';
const ChatBoard = ({ messages, partyInfo }) => (
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

        </div>
      </div>
    </div>

  </div>
);
export default ChatBoard;
