import React from "react";

// Local Components
import { Board } from "../components";

// Animations
import { revealBoardPage } from "../animations";

export const BoardPage = () => {
  React.useEffect(() => {
    const killAnimation = revealBoardPage();

    return killAnimation;
  }, []);

  return (
    <main className="board-main">
      <Board />
    </main>
  );
};
