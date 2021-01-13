import React from "react";
import "./playnow.css";

export default function PlayNow({ history, roomList }) {
  const handleClick = () => {
    if (localStorage.getItem("token") === null) {
      history.push("/signin");
    } else {
      if (roomList.length > 0) {
        let id = Math.floor(Math.random() * roomList.length) + 1;
        history.push("/game/" + id);
      }
    }
  };
  return (
    <div class='div-dash' onClick={() => handleClick()}>
      <div className='div-text'>Play Now</div>
    </div>
  );
}
