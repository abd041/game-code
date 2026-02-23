function About({ onBack }) {
  return (
    <section className="screen screen--about">
      <h1 className="screen__title">About</h1>
      <div className="screen__content">
        <p>
          A minimal narrative multiple-choice game. Your choices shape the path.
          Built with React and Vite.
        </p>
      </div>
      <button type="button" className="btn btn--secondary" onClick={onBack}>
        Back to Menu
      </button>
    </section>
  )
}

export default About
