import { React, useState, useEffect } from "react";
import { Row, Col } from 'react-bootstrap';
import OnlineBoard from "../OnlineBoard/index";
import ChatBox from "../Chatbox/chatbox.jsx";
import NavBar from "../../components/Navbar/navbar";
import PlayNow from "./components/playnow";
import Room from './components/room';
const room = 1;

function Homepage() {
  const [data, setData] = useState(['1','2','3','4']);
  const handleClick = () => { };
  return (
    <div>
      <NavBar></NavBar>
      <br />
      <div className="ml-5 list-board">
        <Row class="row-board ">
          <Col xs={3} style={{ marginBottom: '4%' }}>
              <PlayNow onClick={handleClick}></PlayNow>
          </Col>
          {data.map((item) => (
            <Col xs={3} style={{marginBottom: '4%' }}>
              <Room id={item}></Room>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Homepage;
