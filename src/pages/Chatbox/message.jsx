import React from 'react';
function Message() {
    return (
        <div classname="message-item">
            <div><b>{this.props.senderName}</b></div>
            <span>{this.props.text}</span>
‍        </div>
    )
}
export default Message