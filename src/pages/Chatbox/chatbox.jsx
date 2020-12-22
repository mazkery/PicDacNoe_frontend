import { React, useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import MessagesPanel from "./messagepanel";
import "./chatbox.css";
import socket from "../../socket/socket";

function ChatBox(props) {
  const [room, setRoom] = useState(props.room);
  const [user1, setUser1] = useState(props.user1);
  const [messageList, setMessageList] = useState([]);
  const [messageDisplayList, setMessageDisplayList] = useState([]);
  let messList = [];

  const handleSendMessage = (room, text) => {
    socket.emit("send-message", {
      room,
      text,
      senderName: socket.id,
      id: Date.now(),
    });
  };

  socket.on("message", (message) => {
    if (room === message.room) {
      if (message !== null || message !== "") {
        messList = messageList;
        messList.push(message);
        setMessageList(messList);
      }
    }
  });

  useEffect(() => {
    console.log(room);

    let displayList = messageList.map((message) => {
      return (
        <tr>
          <td>{message}</td>
        </tr>
      );
    });
    setMessageDisplayList(displayList);
  }, [messList]);

  return (
    <div classname="chat-app">
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Messages</th>
            </tr>
          </thead>
          <tbody>{messageList}</tbody>
        </Table>
      </div>
      <div>
        <MessagesPanel onSendMessage={handleSendMessage} room={room} />
      </div>
    </div>
  );
}
export default ChatBox;
