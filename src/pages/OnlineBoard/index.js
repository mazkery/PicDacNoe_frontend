import React, { useEffect, useState } from "react";
import { Table, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import socket from "../../socket/socket";

function OnlineBoard() {
  const [onlineUser, setOnlineUser] = useState([]);
  const [onlineList, setOnlineList] = useState([]);

  useEffect(() => {
    socket.emit("onlineUser", localStorage.getItem("username"));

    return () => {
      socket.emit("offlineUser", localStorage.getItem("username"));
    };
  }, []);

  socket.on("onlineList", (data) => {
    let usernameList = [];
    Object.keys(data).map((socketId) => {
      usernameList.push(data[socketId]);
    });
    setOnlineUser(usernameList);
  });

  useEffect(() => {
    let List = onlineUser.map((username) => {
      return (
        <tr>
          <td>{username}</td>
        </tr>
      );
    });
    setOnlineList(List);
  }, [onlineUser]);

  return (
    <div className="w-25 m-auto">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Online Member</th>
          </tr>
        </thead>
        <tbody>{onlineList}</tbody>
      </Table>
    </div>
  );
}

export default OnlineBoard;
