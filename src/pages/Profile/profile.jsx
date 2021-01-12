import { React, useState } from "react";
import "./profile.css";
import NavBar from "../../components/Navbar/navbar";

export default function Ranking() {
    const [data, setData] = useState({
        name: "Manh Trong Lam Phong",
        username: "meo_lamphong",
        trophy: "5",
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
                <div className="profile-name">{data.name}</div>
                <div className="username">{data.username}</div>
                <div className="trophy">
                    <div className="point">{data.trophy} </div>
                    <div className="star">
                        <i class="far fa-star"></i>
                    </div>
                </div>
                <br />
                <br />
                <ul class="list-group">
                    {(() => {
                        const elements = [];
                        history.map((item) =>
                            elements.push(
                                <li class="list-group-item">
                                    <a href={'/history/' + item.id}>
                                        <div className="game" >{item.id}</div>
                                    </a>
                                    <div className="result">{item.result}</div>
                                </li>
                            )
                        );
                        return elements;
                    })()}
                </ul>
            </div>
        </div>
    );
}
