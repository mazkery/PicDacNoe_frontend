import React from "react";
import "./playnow.css";

export default function PlayNow({ history }) {
  const handleClick = () => {
    history.push('/game/123')
  }
  return (
    <div class="div-dash" onClick={() => handleClick()}>
      <div className="div-text">Play Now</div>
    </div>
  );
}
