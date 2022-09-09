import React from "react";

export const StatusOverlay = ({ message, handleReset }) => {
  return (
    <div className="state-overlay">
      <p>{message}</p>
      <button className="button-primary" onClick={handleReset}>
        Play again
      </button>
    </div>
  );
};
