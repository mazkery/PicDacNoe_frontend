import { React, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Row, Col, Form, FormControl, Button } from 'react-bootstrap';
import OnlineBoard from "../OnlineBoard/index";
import ChatBox from "../Chatbox/chatbox.jsx";
import NavBar from "../../components/Navbar/navbar";
import PlayNow from "./components/playnow";
import Room from './components/room';
import Online from './components/online';
import './index.css';

function Homepage() {
  const history = useHistory();
  const [data, setData] = useState(['1', '2', '3', '4', '5', '6', '6']);
  const [online, setOnline] = useState(['Phong', 'Duy', 'Nghi']);
  const [key, setKey] = useState('');
  const handleClick = (id) => {
    if(localStorage.getItem('token')===null){
      history.push('/signin');
    }
    else{
      history.push(`/game/${id}`)
    }
  };
  const search = () => { };
  useEffect(() => {

  }, [])
  return (
    <div>
      <NavBar></NavBar>
      <br />
      <div className="ml-5 listroom" style={{ width: '75%' }}>
        <div className="bar">
          <div className='searchbar'>
            <div className="input">
              <input
                onChange={(evt) => setKey(evt.target.value)}
                type="text"
                class="form-control"
                placeholder="Search..."
                required="true"
                autofocus=""
                value={key}></input>
            </div>
          </div>
          <div  className='new'>
            <button type="button" class="btn btn-danger" onClick={()=>handleClick('123')}>New Room</button>
          </div>
        </div>
        <Row class="row-board" style={{ marginTop: '4%' }}>
          <Col xs={4} style={{ marginBottom: '4%' }}>
            <PlayNow history={history}></PlayNow>
          </Col>
          {(() => {
            const elements = [];
            if (!key) {
              data.map((item) => elements.push(
                <Col xs={4} style={{ marginBottom: '4%' }}>
                  <Room history={history} id={item} ></Room>
                </Col>
              ))
            }
            else {
              data.map((item) => {
                if (item === key) {
                  elements.push(
                    <Col xs={4} style={{ marginBottom: '4%' }}>
                      <Room history={history} id={item}></Room>
                    </Col>
                  )
                }
              })
            }
            return elements;
          })()}
        </Row>
      </div>
      <div className="onlineboard">
        <Online online={online}></Online>
      </div>
    </div>
  );
}

export default Homepage;
