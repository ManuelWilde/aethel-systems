export default function HomePage() {
  return (
    <main className="page">
      <header className="nav">
        <div className="brand">AETHEL Systems</div>
        <nav className="navLinks">
          <a href="#vision">Vision</a>
          <a href="#approach">Approach</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <div className="heroBadge">Structured Intelligence</div>

        <h1>
          Systems for
          <br />
          truth, knowledge,
          <br />
          and execution.
        </h1>

        <p className="heroText">
          AETHEL Systems builds high-level digital systems with clarity,
          structure, and strong architectural thinking.
        </p>

        <div className="heroActions">
          <a className="buttonPrimary" href="#contact">
            Start a conversation
          </a>
          <a className="buttonSecondary" href="#approach">
            Explore the model
          </a>
        </div>
      </section>

      <section id="vision">
        <h2>Vision</h2>
        <p>
          AETHEL develops high-level systems for structured intelligence,
          knowledge architecture, and durable execution.
        </p>
      </section>

      <section id="approach">
        <h2>Approach</h2>
        <p>
          We focus on clarity, strong system design, and architectures that can
          scale from thought to implementation.
        </p>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Contact: manuelwilde77@gmail.com</p>
      </section>
    </main>
  );
}
