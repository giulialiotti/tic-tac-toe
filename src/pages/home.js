import React from "react";

// External Components
import { Link } from "react-router-dom";

// Local Components
import { NamePlayer } from "../components";

// Animations
import { revealHomePage } from "../animations";

export const Home = () => {
  React.useEffect(() => {
    const killAnimation = revealHomePage();

    return killAnimation;
  }, []);

  return (
    <main className="home-main">
      <header>
        <h1>
          {/* Spans are for animation */}
          <span className="headline-span">T</span>
          <span className="headline-span">i</span>
          <span className="headline-span">c</span>
          <br />
          <span className="headline-span">T</span>
          <span className="headline-span">a</span>
          <span className="headline-span">c</span>
          <br />
          <span className="headline-span">T</span>
          <span className="headline-span">o</span>
          <span className="headline-span">e</span>
        </h1>
      </header>
      <section id="name-players">
        <h2>Name your players</h2>
        <NamePlayer label="First Player" />
        <NamePlayer label="Second Player" />
      </section>
      <section>
        <Link className="button-primary play-now-button" to="/board">
          Play now!
        </Link>
      </section>
    </main>
  );
};
