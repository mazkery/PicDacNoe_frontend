import React, { useEffect, useState } from "react";
import { Table, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:3001";

function OnlineBoard() {
  const [onlineUser, setOnlineUser] = useState([]);

  useEffect(() => {
    debugger;
    const socket = socketIOClient(ENDPOINT);
    socket.emit("online", "test data for sending");
    socket.on("FromAPI", (data) => {
      console.log(data);
    });

    return () => socket.disconnect();
  }, []);

  return (
    <div className="w-25 m-auto">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Online Member</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
          </tr>
          <tr>
            <td>Jacob</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default OnlineBoard;
