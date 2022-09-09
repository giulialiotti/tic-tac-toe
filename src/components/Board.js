import React from "react";

// Local Components
import { Cell } from "./Cell";
import { Scores } from "./Scores";
import { StatusOverlay } from "./StatusOverlay";

const Player = {
  x: "X",
  o: "O",
};

const Status = {
  playing: "PLAYING",
  draw: "DRAW",
  finished: "FINISHED",
  xWon: "XWON",
  oWon: "OWON",
};

const INITIAL_STATE = new Array(9).fill("");

const INITIAL_SCOREBOARD = {
  [Player.x]: 0,
  [Player.o]: 0,
};

const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const Board = () => {
  const [turn, setTurn] = React.useState("X");
  const [cells, setCells] = React.useState(INITIAL_STATE);
  const [status, setStatus] = React.useState(Status.playing);
  const [scoreboard, setScoreboard] = React.useState(INITIAL_SCOREBOARD);
  const [openOverlay, setOpenOverlay] = React.useState(false);

  function handleOverlay() {
    setOpenOverlay(!openOverlay);
  }

  function handleClick(index) {
    // if we are not playing return
    if (status !== Status.playing) return;

    // if cell is empty we assign a turn
    if (cells[index] === "") {
      const draft = [...cells];

      draft[index] = turn;

      // check if matched winning combinations
      const hasWon = WINNING_COMBINATIONS.some((comb) => {
        return comb.every((cell) => {
          return turn === draft[cell];
        });
      });

      // if there's a winner update status and winner scoreboard
      if (hasWon) {
        setStatus(Status.finished);
        setScoreboard((scoreboard) => ({
          ...scoreboard,
          [turn]: scoreboard[turn] + 1,
        }));
        handleOverlay();
      }

      // if there's no winner keep playing
      if (!hasWon && !draft.some((cell) => cell === "")) {
        setStatus(Status.draw);
        handleOverlay();
      }

      setTurn(turn === Player.x ? Player.o : Player.x);
      setCells(draft);
    }
  }

  function handleReset() {
    setCells(INITIAL_STATE);
    setStatus(Status.playing);
    handleOverlay();
  }

  return (
    <>
      <section id="players-turn">
        <h2>It’s {turn} turn!</h2>
      </section>
      <div className="board">
        {cells.map((cell, index) => (
          <Cell
            key={index}
            data={cell}
            handleClick={() => handleClick(index)}
          />
        ))}
      </div>
      <Scores
        firstPlayer={Player.x}
        secondPlayer={Player.o}
        firstPlayerScore={scoreboard[Player.x]}
        secondPlayerScore={scoreboard[Player.o]}
      />
      {openOverlay && (
        <StatusOverlay
          hasWon={status === Status.finished}
          handleReset={handleReset}
          message={
            status === Status.finished
              ? `The winner is ${turn === Player.o ? "X" : "O"}!`
              : "It's a tie!"
          }
        />
      )}
    </>
  );
};
