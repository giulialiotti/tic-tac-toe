// Local Components
import { NamePlayer } from "../components";

export const Home = () => {
  return (
    <main className="home-main">
      <h1>
        Tic
        <br />
        tac
        <br />
        toe
      </h1>
      <section id="name-players">
        <h2>Name your players</h2>
        <NamePlayer label="First Player" />
        <NamePlayer label="Second Player" />
      </section>
      <a className="button-primary" href="/board">
        Play now!
      </a>
    </main>
  );
};
