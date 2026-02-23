function RestartEnd({ onRestart, onEnd }) {
  return (
    <section className="screen screen--restart-end">
      <h1 className="screen__title">What next?</h1>
      <div className="screen__actions">
        <button type="button" className="btn btn--primary" onClick={onRestart}>
          Play Again
        </button>
        <button type="button" className="btn btn--secondary" onClick={onEnd}>
          Back to Menu
        </button>
      </div>
    </section>
  )
}

export default RestartEnd
