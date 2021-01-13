import { React, useEffect, useState } from "react";
import {
  Widget,
  addResponseMessage,
  addLinkSnippet,
  addUserMessage,
  renderCustomComponent,
} from "react-chat-widget";

import "react-chat-widget/lib/styles.css";
import "./chatbox.css";
import socket from "../../../socket/socket";

export default function ChatBox(props) {
  const [isNewInRoom, setIsNewInRoom] = useState(true);
  let link = window.location.href;
  let roomId = link[link.length - 1];

  useEffect(() => {
    /*let currentUrl = window.location.href;
    let matches = currentUrl.match(/:\/\/(?:www\.)?(.[^/]+)(.*)/);
    let roomId = matches[matches.length];*/
    if (isNewInRoom) {
      if (roomId) {
        socket.emit(roomId, { label: "requestAllMessages" });
        setIsNewInRoom(false);
      }
    }
  }, []);

  const handleNewUserMessage = (newMessage) => {
    debugger;
    socket.emit("onServerLocalRoom", {
      label: "sendMessage",
      token: localStorage.getItem("token"),
      name: localStorage.getItem("name"),
      text: newMessage,
    });
  };

  socket.on("localRoom", (message) => {
    let userToken = localStorage.getItem("token");
    let name = localStorage.getItem("name");

    console.log(roomId);
    // co tin nhan moi thi them vao khung chat
    if (message.label === "updateMessage") {
      //cap nhat tin nhan khong phai cua ban than gui
      if (message.token !== userToken) {
        debugger;
        addResponseMessage(message.name + "\n\n" + message.text);
      }
    }

    // Lay toan bo noi dung chat
    if (message.label === "getAllMessages") {
      console.log(message.allMessage);
      debugger;
      message.allMessage.map((content) => {
        if (content.token !== userToken) {
          addResponseMessage(content.name + "\n\n" + content.text);
        }
      });
    }
  });

  return (
    <div className=''>
      <Widget
        id='chat'
        handleNewUserMessage={handleNewUserMessage}
        title={socket.id}
        subtitle={null}
      />
    </div>
  );
}
