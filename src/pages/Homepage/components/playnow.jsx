import React from "react";
import "./playnow.css";

export default function PlayNow({ history }) {
  const handleClick = () => {
    if (localStorage.getItem('token') === null) {
      console.log('aaaaaa');
      history.push('/signin');
    }
    else {
      history.push('/game/123')
    }
  }
  return (
    <div class="div-dash" onClick={() => handleClick()}>
      <div className="div-text">Play Now</div>
    </div>
  );
}
