import React, { useState } from "react";
import Game from "./components/Game";
import "./GameMatch.css";
import NavBar from "../../components/Navbar/navbar";

function GameMatch() {
  return (
    <div>
      <NavBar></NavBar>
      <Game classname='game' />
    </div>
  );
}

export default GameMatch;
