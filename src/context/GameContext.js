import React from "react";

import {
  Player,
  Status,
  INITIAL_BOARD_STATE,
  INITIAL_SCOREBOARD,
  WINNING_COMBINATIONS,
} from "../utils/variables";

export const GameContext = React.createContext();

export const useGame = () => React.useContext(GameContext);

export const GameProvider = ({ children }) => {
  const [players, setPlayers] = React.useState(Player);
  const [turn, setTurn] = React.useState("x");
  const [cells, setCells] = React.useState(INITIAL_BOARD_STATE);
  const [status, setStatus] = React.useState(Status.playing);
  const [scoreboard, setScoreboard] = React.useState(INITIAL_SCOREBOARD);
  const [openOverlay, setOpenOverlay] = React.useState(false);

  const recordPlayers = (e) => {
    if (e.target.name === "First Player") {
      setPlayers((players) => ({
        ...players,
        x: e.target.value,
      }));
    } else {
      setPlayers((players) => ({
        ...players,
        o: e.target.value,
      }));
    }
  };

  function handleOverlay() {
    setOpenOverlay(!openOverlay);
  }

  function handleCellClick(index) {
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
    setCells(INITIAL_BOARD_STATE);
    setStatus(Status.playing);
    handleOverlay();
  }

  return (
    <GameContext.Provider
      value={{
        players,
        recordPlayers,
        handleCellClick,
        handleReset,
        scoreboard,
        openOverlay,
        turn,
        cells,
        status,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
