import React from "react";
import Lottie from "lottie-react";

// lotties
import conffeti from "../../lotties/74659-confetti-day.json";
import tieConfetti from "../../lotties/82813-confetti-motion.json";

const LottieWrapper = ({ lottieRef, hasWon }) => (
  <div className="lottie-wrapper">
    <Lottie
      lottieRef={lottieRef}
      animationData={hasWon ? conffeti : tieConfetti}
      loop
    />
  </div>
);

export default LottieWrapper;
