function MainMenu({ onStartGame, onAbout }) {
  return (
    <section className="screen screen--menu">
      <h1 className="screen__title">Narrative Choice</h1>
      <p className="screen__subtitle">A short multiple-choice story</p>
      <div className="screen__actions">
        <button type="button" className="btn btn--primary" onClick={onStartGame}>
          Start Game
        </button>
        <button type="button" className="btn btn--secondary" onClick={onAbout}>
          About
        </button>
      </div>
    </section>
  )
}

export default MainMenu
