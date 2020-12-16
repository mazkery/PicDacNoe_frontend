import { React, useState, useEffect } from "react";
import Message from './message';

// function MessagesPanel(props) {
//   let list = (
//     <div classname="no-content-message">There is no messages to show</div>
//   );
//   if (this.props.channel && this.props.channel.messages) {
//     list = this.props.channel.messages.map((m) => (
//       <message
//         key="{m.id}"
//         id="{m.id}"
//         sendername="{m.senderName}"
//         text="{m.text}"
//       ></message>
//     ));
//   }
//   return (
//     <div>
//       <div classname="messages-panel"></div>‍
//       <div classname="meesages-list">{list}</div>‍
//       <div classname="messages-input"></div>
//       ‍
//       <input type="text" />‍<button>Send</button>‍
//     </div>
//   );
// }
// export default MessagesPanel;
function MessagesPanel(props) {
  const [input, setInput] = useState('');
  const send = () => {
    if (input && input != '') {
      props.onSendMessage(props.room, input);
      setInput('');
    }
  }
  const handleInput = e => {
    setInput(e.target.value);
  }
  let list = <div className="no-content-message">There is no messages to show</div>;
  if (props.room && props.room.messages) {
    list = props.room.messages.map(m => <Message key={m.id} id={m.id} senderName={m.senderName} text={m.text} />);
  }
  return (
    <div className='messages-panel'>
      <div className="meesages-list">{list}</div>
      {props.room &&
        <div className="messages-input">
          <input type="text" onChange={handleInput} value={input} />
          <button onClick={send}>Send</button>
        </div>
      }
    </div>);
}
export default MessagesPanel