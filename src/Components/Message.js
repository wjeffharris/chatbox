import React, { Component } from 'react'

export default class Message extends Component {
  render() {
  
        const {messages} = this.props
        
        return (
            <ul className = "message-list">
              
                     {/* this will display the message as prop from the App Component.
                This list item will show the message, User name and Avatar */}
                {messages.map(m => this.renderMessage(m))}
            </ul>
        );
        
    }
    renderMessage(message){
      const {member, text} = message
      const {CurrentMember} = this.props
      const messageFromMe = member === CurrentMember;
      const className = messageFromMe ? "Message-message CurrentMember" : "Messages-message"
    
      return (
          <li className={className}>
        <span
          className="avatar"
          style={{backgroundColor: member.clientData}}
        />
        <div className="Message-content">
          <div className="username">
            {member.clientData}
          </div>
          <div className="text">{text}</div>
        </div>
      </li>
      )
    }
}
