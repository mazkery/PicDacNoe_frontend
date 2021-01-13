import { React, useState, useEffect } from "react";
import axios from "axios";
import "./profile.css";
import NavBar from "../../components/Navbar/navbar";

export default function Ranking() {
    const [data, setData] = useState([]);
    const [history, setHistory] = useState([
        { id: "123", result: "Win" },
        { id: "456", result: "Lost" },
    ]);
    useEffect(() => {
        const getProfile = async () => {
            await axios.get(localStorage.getItem('API') + 'profile', { email: localStorage.getItem('email') })
                .then(function (response) {
                    console.log(response.data);
                    setData(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        getProfile();
    }, [])
    return (
        <div>
            {(() => {
                if (localStorage.getItem('token') === null) {
                    console.log('out');
                    history.push('/signin');
                }
            })()}
            <NavBar></NavBar>
            <div className="content">
                {(() => {
                    if (data.length !== 0) {
                        const elements = [];
                        elements.push(
                            <div>
                                <div className="profile-name">{data.user.name}</div>
                                <div className="username">{data.user.email}</div>
                                <div className="trophy">
                                    <div className="point">{data.trophy} </div>
                                    <div className="star">
                                        <i class="far fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        )
                        return elements;
                    }
                })()}
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
