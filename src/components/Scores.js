import React from "react";

export const Scores = ({
  firstPlayer,
  secondPlayer,
  firstPlayerScore,
  secondPlayerScore,
}) => {
  return (
    <div className="scores-wrapper">
      <h2>Score</h2>
      <div className="scores-wrapper__players-names">
        <p>{firstPlayer}</p>
        <div />
        <p>{secondPlayer}</p>
      </div>
      <div className="scores-wrapper__players-scores">
        <p>{firstPlayerScore}</p>
        <p>{secondPlayerScore}</p>
      </div>
    </div>
  );
};
