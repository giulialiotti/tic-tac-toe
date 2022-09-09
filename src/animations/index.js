import { gsap } from "gsap";

// Utils
import { shuffleArray } from "../utils";

export const revealHomePage = () => {
  let spans = gsap.utils.toArray(".headline-span");
  let randomSpans = shuffleArray(spans);

  let namePlayers = document.getElementById("name-players");
  let button = document.querySelector(".play-now-button");
  let namePlayersChildren = [...namePlayers.children];

  let tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 0.6 } });

  tl.to(randomSpans, {
    autoAlpha: 1,
    scale: 1,
    stagger: 0.2,
  })
    .to(namePlayersChildren, {
      y: 0,
      autoAlpha: 1,
      stagger: 0.2,
    })
    .to(button, { y: 0, autoAlpha: 1 }, "-=0.4");

  return () => {
    tl.pause(0).kill(true);
  };
};

export const revealBoardPage = () => {
  let cells = gsap.utils.toArray(".cell");
  let randomCells = shuffleArray(cells);

  let scores = document.querySelector(".scores-wrapper");
  let scoresElements = [...scores.children];

  let tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 0.6 } });

  tl.to(randomCells, {
    autoAlpha: 1,
    scale: 1,
    stagger: 0.2,
  })
    .to("#players-turn", {
      y: 0,
      autoAlpha: 1,
    }, '-=0.2')
    .to(
      scoresElements,
      {
        y: 0,
        autoAlpha: 1,
        stagger: 0.2,
      },
      "-=0.4"
    );

  return () => {
    tl.pause(0).kill(true);
  };
};
