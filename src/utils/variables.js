export const Player = {
  x: "x",
  o: "o",
};

export const Status = {
  playing: "PLAYING",
  draw: "DRAW",
  finished: "FINISHED",
  xWon: "XWON",
  oWon: "OWON",
};

export const INITIAL_BOARD_STATE = new Array(9).fill("");

export const INITIAL_SCOREBOARD = {
  [Player.x]: 0,
  [Player.o]: 0,
};

export const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
