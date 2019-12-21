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
        )
    }
}
function renderMessage(message){
    const {member, text} = message
    const {CurrentMember} = this.props
    
}