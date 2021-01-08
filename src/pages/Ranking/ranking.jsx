import { React, useState } from "react";
import "./ranking.css";
import NavBar from "../../components/Navbar/navbar";

export default function Profile() {
    // const [data, setData] = useState({
    //     name: "Manh Trong Lam Phong",
    //     username: "meo_lamphong",
    //     trophy: "5",
    // });
    const [ranking, setRanking] = useState([
        { username: "meo_lamphong", trophy: "333" },
        { username: "duyquangtruong", trophy: "222" },
        { username: "nghitran", trophy: "111" },
        { username: "meo_lamphong", trophy: "333" },
        { username: "duyquangtruong", trophy: "222" },
        { username: "nghitran", trophy: "111" },
        { username: "meo_lamphong", trophy: "333" },
        { username: "duyquangtruong", trophy: "222" },
        { username: "nghitran", trophy: "111" },
        { username: "meo_lamphong", trophy: "333" },
    ]);
    return (
        <div>
            <NavBar></NavBar>
            <div className="content-ranking">
                <h1>RANKING</h1>
                <br />
                <br />
                <ul class="list-group ranking">
                    {(() => {
                        let no = 0;
                        const elements = [];
                        ranking.map((item) => {
                            no = no + 1;
                            elements.push(
                                <li class="list-group-item">
                                    <a href={'/' + item.username} className='user'>
                                        <div className="game" >{'#' + (no) + '. ' + (item.username)}</div>
                                    </a>
                                    <div className="result">{item.trophy}</div>
                                </li>
                            )
                        }
                        );
                        return elements;
                    })()}
                </ul>
            </div>
        </div>
    );
}
