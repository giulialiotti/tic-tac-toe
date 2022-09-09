import React, { Suspense } from "react";

// Local Components
import { LottieWrapper } from "./lottie";

export const StatusOverlay = ({ hasWon, message, handleReset }) => {
  return (
    <div className="state-overlay">
      <p>{message}</p>
      <button className="button-primary" onClick={handleReset}>
        Play again
      </button>
      <Suspense fallback={<div />}>
        <LottieWrapper hasWon={hasWon} />
      </Suspense>
    </div>
  );
};
