import React from "react";

// Local Components
import { Cell } from "./Cell";
import { Scores } from "./Scores";
import { StatusOverlay } from "./StatusOverlay";

// Context
import { useGame } from "../context/GameContext";

// Variables
import { Player, Status } from "../utils/variables";

export const Board = () => {
  const {
    players,
    handleCellClick,
    handleReset,
    scoreboard,
    openOverlay,
    turn,
    cells,
    status,
  } = useGame();

  return (
    <>
      <section id="players-turn">
        <h2>It’s {players[turn]} turn!</h2>
      </section>
      <div className="board">
        {cells.map((cell, index) => (
          <Cell
            key={index}
            data={cell}
            handleClick={() => handleCellClick(index)}
          />
        ))}
      </div>
      <Scores
        firstPlayer={players.x}
        secondPlayer={players.o}
        firstPlayerScore={scoreboard[Player.x]}
        secondPlayerScore={scoreboard[Player.o]}
      />
      {openOverlay && (
        <StatusOverlay
          hasWon={status === Status.finished}
          player={turn === Player.o ? players.x : players.o}
          handleReset={handleReset}
        />
      )}
    </>
  );
};
