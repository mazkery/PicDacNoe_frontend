import { React, useState, useEffect } from "react";
import MessagesPanel from "./messagepanel";
import socketClient from "socket.io-client";
import "./chatbox.css";
const SERVER = "http://localhost:5000";

function ChatBox(props) {
  const [room, setRoom] = useState(props.room);
  const [user1, setUser1] = useState(props.user1);
  const [socket, setSocket] = useState();
  const configureSocket = () => {
    var socket = socketClient(SERVER);
    socket.on("message", (message) => {
      if (room === message.room) {
        if (!room.messages) {
          room.messages = [message];
        } else {
          room.messages.push(message);
        }
      }

      setRoom(room);
    });
    setSocket(socket);
  };
  const handleSendMessage = (room, text) => {
    socket.emit("send-message", {
      room,
      text,
      senderName: socket.id,
      id: Date.now(),
    });
  };
  useEffect(() => {
    configureSocket();
    console.log("ahihi");
    console.log(room);
  }, []);
  return (
    <div classname="chat-app">
      <MessagesPanel onSendMessage={handleSendMessage} room={room} />
    </div>
  );
}
export default ChatBox;
