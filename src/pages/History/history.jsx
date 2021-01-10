import { React, useState } from "react";
import "./history.css";
import { Row, Col } from 'react-bootstrap';
import NavBar from "../../components/Navbar/navbar";
import Board from '../GameMatch/components/Board';

export default function History() {
    const [data, setData] = useState({
        room: "#123",
        winner: "meo_lamphong",
        competitor: "duyquangtruong",
    });
    const [history, setHistory] = useState([
        { id: "123", result: "Win" },
        { id: "456", result: "Lost" },
    ]);
    console.log(history);
    return (
        <div>
            <NavBar></NavBar>
            <div className="content">
                <div className="roomid">{'Room: ' + data.room}</div>
                <div className="winner">{'Winner: ' + data.winner}</div>
                <div className="winner">{'Competitor: ' + data.competitor}</div>
                <br />
                <br />
                <Row>
                    <Col xs={6}>
                        <div>hiiii</div>
                    </Col>
                    <Col xs={6}>
                        <ul class="list-group">
                            {(() => {
                                const elements = [];
                                history.map((item) =>
                                    elements.push(
                                        <li class="list-group-item">
                                            <div className="game">{item.id}</div>
                                            <div className="result">{item.result}</div>
                                        </li>
                                    )
                                );
                                return elements;
                            })()}
                        </ul>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
