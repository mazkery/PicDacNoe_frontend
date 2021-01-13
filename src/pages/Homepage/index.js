import { React, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Row, Col, Form, FormControl, Button } from "react-bootstrap";
import ChatBox from "../Chatbox/chatbox.jsx";
import NavBar from "../../components/Navbar/navbar";
import PlayNow from "./components/playnow";
import Room from "./components/room";
import Online from "./components/online";
import socket from "../../socket/socket";
import "./index.css";

function Homepage(props) {
  const history = useHistory();
  const [roomList, setRoomList] = useState([]);
  const [onlineUser, setOnlineUser] = useState([]);
  const [newRoomId, setNewRoomId] = useState(-1);
  const [key, setKey] = useState("");

  const handleCreateNewRoom = () => {
    if (localStorage.getItem("token") === null) {
      history.push("/signin");
    } else {
      let id = 1;
      let numberOfRoom = roomList.length;
      for (id = 1; id <= numberOfRoom; id++) {
        if (id <= numberOfRoom && !roomList.includes(id)) {
          break;
        }
      }
      let newRoomList = roomList;
      newRoomList.push(id);
      setNewRoomId(id);
      setRoomList(newRoomList);
    }
  };

  useEffect(() => {
    socket.emit("onlineUser", localStorage.getItem("name"));
  }, []);

  useEffect(() => {
    if (newRoomId > 0) {
      socket.emit("createRoom", newRoomId);
      let Id = newRoomId;
      setNewRoomId(-1);
      history.push(`/game/${Id}`);
    }
  }, [newRoomId]);

  socket.on("onlineList", (data) => {
    let nameList = [];
    Object.keys(data).map((socketId) => {
      nameList.push(data[socketId]);
    });
    setOnlineUser(nameList);
  });

  socket.on("onlineRooms", (roomList) => {
    setRoomList(roomList);
  });

  return (
    <div>
      <NavBar></NavBar>
      <br />
      <div className='ml-5 listroom' style={{ width: "75%" }}>
        <div className='bar'>
          <div className='searchbar'>
            <div className='input'>
              <input
                onChange={(evt) => setKey(evt.target.value)}
                type='text'
                class='form-control'
                placeholder='Search...'
                required='true'
                autofocus=''
                value={key}
              ></input>
            </div>
          </div>
          <div className='new'>
            <button
              type='button'
              class='btn btn-danger'
              onClick={() => handleCreateNewRoom()}
            >
              New Room
            </button>
          </div>
        </div>
        <Row class='row-board' style={{ marginTop: "4%" }}>
          <Col xs={4} style={{ marginBottom: "4%" }}>
            <PlayNow history={history}></PlayNow>
          </Col>
          {(() => {
            const elements = [];
            if (!key) {
              roomList.map((roomId) =>
                elements.push(
                  <Col xs={4} style={{ marginBottom: "4%" }}>
                    <Room history={history} id={roomId}></Room>
                  </Col>
                )
              );
            } else {
              roomList.map((roomId) => {
                if (roomId === key) {
                  elements.push(
                    <Col xs={4} style={{ marginBottom: "4%" }}>
                      <Room history={history} id={roomId}></Room>
                    </Col>
                  );
                }
              });
            }
            return elements;
          })()}
        </Row>
      </div>
      <div className='onlineboard'>
        <Online online={onlineUser}></Online>
      </div>
    </div>
  );
}

export default Homepage;
