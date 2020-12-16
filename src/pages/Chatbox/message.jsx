import React from 'react';

function Message(props) {
    return (
        <div classname="message-item">
            <div><b>{props.senderName}</b></div>
            <span>{props.text}</span>
‍        </div>
    )
}
export default Message