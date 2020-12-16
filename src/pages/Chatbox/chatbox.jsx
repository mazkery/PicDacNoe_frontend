import { React, useState, useEffect } from "react";
import MessagesPanel from './messagepanel';
import { socketClient } from 'socket.io-client';
import "./chatbox.css";
const SERVER = "http://localhost:5000";

function ChatBox(props) {
  const [room, setRoom] = useState(props.room);
  const [user1, setUser1] = useEffect(props.user1);
  const [user2, setUser2] = useEffect(props.user2);
  const configureSocket = () => {
    var socket = socketClient(SERVER);
    socket.on("connection", () => {
      if (this.state.channel) {
        this.handleChannelSelect(this.state.channel.id);
      }
    });
    socket.on("message", (message) => {
      let channels = this.state.channels;
      channels.forEach((c) => {
        if (c.id === message.channel_id) {
          if (!c.messages) {
            c.messages = [message];
          } else {
            c.messages.push(message);
          }
        }
      });
      this.setState({ channels });
    });
    this.socket = socket;
  };
  const handleSendMessage = (channel_id, text) => {
    this.socket.emit("send-message", {
      channel_id,
      text,
      senderName: this.socket.id,
      id: Date.now(),
    });
  };
  return (
    <div classname="chat-app">
      <MessagesPanel />
    </div>
  );
}
export default ChatBox;
