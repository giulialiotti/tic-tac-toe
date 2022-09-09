// Local Components
import { NamePlayer } from "../components";

export const Home = () => {
  return (
    <main className="home-main">
      <header>
        <h1>
          Tic
          <br />
          tac
          <br />
          toe
        </h1>
      </header>
      <section id="name-players">
        <h2>Name your players</h2>
        <NamePlayer label="First Player" />
        <NamePlayer label="Second Player" />
      </section>
      <section>
        <a className="button-primary" href="/board">
          Play now!
        </a>
      </section>
    </main>
  );
};
