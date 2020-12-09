import React, { useEffect, useState } from "react";
import { Table, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:5000";
let onlineList;

function OnlineBoard() {
  const [onlineUser, setOnlineUser] = useState([]);

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);

    socket.emit("onlineUser", "online user name");

    socket.on("onlineList", (data) => {
      setOnlineUser(data);
    });

    return () => socket.disconnect();
  }, []);

  useEffect(() => {
    onlineList = onlineUser.map((username) => {
      return (
        <tr>
          <td>{username}</td>
        </tr>
      );
    });
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
