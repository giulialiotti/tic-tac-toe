import React from "react";

// Context
import { useGame } from "../context/GameContext";

export const NamePlayer = ({ label }) => {
  const { recordPlayers } = useGame();

  return (
    <div className="name-player">
      <label htmlFor="Name">{label}</label>
      <input
        type="text"
        id="Name"
        name={label}
        placeholder="Enter a name"
        onChange={recordPlayers}
      />
    </div>
  );
};
