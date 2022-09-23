import React, { Suspense } from "react";

// Local Components
import { LottieWrapper } from "./lottie";

export const StatusOverlay = ({ hasWon, player, handleReset }) => {
  return (
    <div className="state-overlay">
      {hasWon ? (
        <p>
          The winner is
          <br />
          {player}!
        </p>
      ) : (
        <p>It's a tie!</p>
      )}
      <button className="button-primary" onClick={handleReset}>
        Play again
      </button>
      <Suspense fallback={<div />}>
        <LottieWrapper hasWon={hasWon} />
      </Suspense>
    </div>
  );
};
