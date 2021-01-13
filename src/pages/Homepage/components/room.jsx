import { React, useState } from "react";
import socket from "../../../socket/socket";
import "./room.css";

export default function Room({ history, id }) {
  const handleClick = () => {
    if (localStorage.getItem("token") === null) {
      history.push("/signin");
    } else {
        socket.emit("joinRoom",id);
      history.push(`/game/${id}`);
    }
  };
  return (
    <div className="room" onClick={() => handleClick()}>
      {id}
    </div>
  );
}
