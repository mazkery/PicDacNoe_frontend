import React from "react";
import { Message } from "./message";

function MessagesPanel(props) {
  let list = (
    <div classname="no-content-message">There is no messages to show</div>
  );
  if (this.props.channel && this.props.channel.messages) {
    list = this.props.channel.messages.map((m) => (
      <message
        key="{m.id}"
        id="{m.id}"
        sendername="{m.senderName}"
        text="{m.text}"
      ></message>
    ));
  }
  return (
    <div>
      <div classname="messages-panel"></div>‍
      <div classname="meesages-list">{list}</div>‍
      <div classname="messages-input"></div>
      ‍
      <input type="text" />‍<button>Send</button>‍
    </div>
  );
}
export default MessagesPanel;
