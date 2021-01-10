import { React, useEffect } from 'react';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

export default function ChatBox() {
    const handleNewUserMessage = (newMessage) => {

    }
    useEffect(() => {

    })
    return (
        <div className="App">
            <Widget
                handleNewUserMessage={handleNewUserMessage}
                title='Chat'
                subtitle={null}
            />
        </div>
    )
}