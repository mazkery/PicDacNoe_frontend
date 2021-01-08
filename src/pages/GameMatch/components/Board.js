import React from "react";
import Square from "./Square.js";

function Board(props) {
  function renderSquare(r, c, isHighLight) {
    return (
      <Square
        highLight={isHighLight}
        value={props.squares[r][c]}
        onClick={() => props.onClick(r, c)}
      />
    );
  }
  const boardSize = props.squares[0].length;
  const board = [];
  const row = [];
  for (let i = 0; i < boardSize; i++) {
    row[i] = [];
    for (let j = 0; j < boardSize; j++) {
      const pos = [i, j];
      row[i].push(
        renderSquare(
          i,
          j,
          props.highLightSquares.some(
            (r) =>
              r.length === 2 && r.every((value, index) => pos[index] === value)
          )
        )
      );
    }
    board.push(<div className="board-row">{row[i]}</div>);
  }
  return <div className="game-board">{board}</div>;
}

export default Board;
