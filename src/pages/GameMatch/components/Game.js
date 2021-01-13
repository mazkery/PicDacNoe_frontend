import React, { useState, useEffect } from "react";
import Board from "./Board.js";
import { calculateWinner } from "../CalculateWinner.service.js";
import "../GameMatch.css";
import ChatBox from "./chatbox";
import socket from "../../../socket/socket";
import CountDown from "./countdown";

function Game() {
  const [competitor, setCompetitor] = useState();
  const [start, setStart] = useState(true);
  const [roomId, setRoomId] = useState();
  function getInitialState(size) {
    return {
      history: [
        {
          squares: Array(size)
            .fill()
            .map(() => Array(size).fill(null)),
          savedMove: [null, null],
        },
      ],
      stepNumber: 0,
      listAscending: true,
      nextIsX: true,
      boardSize: size,
    };
  }

  function handleClickSquare(r, c) {
    const history = theGame.history.slice(0, theGame.stepNumber + 1);
    const current = history[history.length - 1];
    const currentSquares = current.squares.slice().map((i) => i.slice());
    if (
      calculateWinner(
        current.squares,
        current.savedMove[0],
        current.savedMove[1]
      ) ||
      currentSquares[r][c]
    )
      return;
    currentSquares[r][c] = theGame.nextIsX ? "X" : "O";
    setTheGame((prevState) => ({
      ...prevState,
      history: history.concat([{ squares: currentSquares, savedMove: [r, c] }]),
      stepNumber: history.length,
      nextIsX: !theGame.nextIsX,
    }));
  }
  function jumpTo(step) {
    setTheGame((prevState) => ({
      ...prevState,
      stepNumber: step,
      nextIsX: step % 2 === 0,
    }));
  }

  const [theGame, setTheGame] = useState(getInitialState(10));

  // Render
  const historyArray = theGame.history;
  const current = historyArray[theGame.stepNumber];
  const win = calculateWinner(
    current.squares,
    current.savedMove[0],
    current.savedMove[1]
  );

  // JSX: Move List
  const moves = historyArray.map((step, move) => {
    const desc = move
      ? "Go to square [" + step.savedMove + "]"
      : "Go to game start";
    return (
      <li key={move}>
        <button
          className={
            "btn btn-outline-secondary " +
            (move === theGame.stepNumber ? "font-weight-bolder" : "")
          }
          onClick={() => jumpTo(move)}
        >
          {desc}
        </button>
      </li>
    );
  });
  // const historyMovesList = theGame.listAscending ? (
  // 	<ol start='0'>{moves}</ol>
  // ) : (
  // 	<ol tart='0' reversed>
  // 		{moves.reverse()}
  // 	</ol>
  // );

  // status
  let status;
  if (win) {
    alert(win.winner + " is winner!");
    status = "Winner:" + win.winner;
  } else {
    if (theGame.stepNumber === theGame.boardSize * theGame.boardSize) {
      status = "It's a tie";
    } else {
      status = "Next player: " + (theGame.nextIsX ? "X" : "O");
    }
  }
  const surrender = () => {
    socket.emit("Surrender", roomId);
  };
  const equalize = () => {
    socket.emit("Equalize", roomId);
  };
  const startGame = () => {
    if (competitor === null) {
      alert("Wait for your competitor!");
    } else {
      setStart(false);
      //Goi len socket cho biet bat dau game
      socket.emit("localRoom", { label: "headStart" });
    }
  };

  useEffect(() => {
    let currentUrl = window.location.href;
    let matches = currentUrl.match(/:\/\/(?:www\.)?(.[^/]+)(.*)/);
    setRoomId(matches[matches.length]);

    return () => {
      socket.emit("leaveRoom", roomId);
    };
  }, []);

  socket.on("removedRoom", (removedRoom) => {
    if (removedRoom === roomId) {
      //Thong bao out room, direct ve homepage

      //Truoc luc out thi emit len server de out tren server
      socket.emit("removedRoom", roomId);
    }
  });

  // Nhan thong diep trong phong
  socket.on("gameInfo", (message) => {
    //Neu co doi thu tham gia
    if (message.label === "opponent") {
      // Xu ly hien thi doi thu và ready để start game
      setCompetitor(message.name);
    }

    if (message.label === "start") {
      //Bat dau tran dau, cap nhat fe tuy theo ben nao danh truoc
    }
  });

  return (
    <div>
      {(() => {
        const element = [];
        if (start === true) {
          element.push(
            <div className='start-button' onClick={() => startGame()}>
              <button
                type='button'
                class='btn btn-danger'
                style={{ fontSize: "30px", width: "10%" }}
              >
                {" "}
                START
              </button>
            </div>
          );
        } else {
          element.push(
            <div style={{ textAlign: "left" }}>
              <div className='game-info '>
                <div className='alert alert-primary'>{status}</div>
              </div>
              <div className='board'>
                <Board
                  squares={current.squares}
                  onClick={(r, c) => handleClickSquare(r, c)}
                  highLightSquares={win ? win.line : []}
                />
              </div>
              <div className='at-right'>
                <div className='action'>
                  <div className='action-button' onClick={() => surrender()}>
                    <div className='flag'>
                      <i class='fas fa-flag'></i>
                    </div>
                    <div>Surrender</div>
                  </div>
                  <div className='action-button' onClick={() => equalize()}>
                    <div className='deal'>
                      <i class='fas fa-american-sign-language-interpreting'></i>
                    </div>
                    <div>Request a Draw</div>
                  </div>
                  <div></div>
                </div>
                <div className='count'>
                  <CountDown></CountDown>
                </div>
              </div>
            </div>
          );
        }
        return element;
      })()}
      <div>
        <ChatBox socket={socket}></ChatBox>
      </div>
    </div>
  );
}

export default Game;
