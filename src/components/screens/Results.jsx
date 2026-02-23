import { SCORE_TRAITS } from '../../data/questions.js'

/** Returns the trait key with the highest score. Ties: first wins. */
function getHighestTrait(score) {
  return SCORE_TRAITS.reduce((best, trait) =>
    (score[trait] ?? 0) > (score[best] ?? 0) ? trait : best
  )
}

function formatTraitLabel(key) {
  return key.charAt(0).toUpperCase() + key.slice(1)
}

function Results({ finalScore, onContinue, onRestart }) {
  const highestTrait = getHighestTrait(finalScore)
  const resultTitle = `Your dominant trait: ${formatTraitLabel(highestTrait)}`

  return (
    <section className="screen screen--results">
      <h1 className="screen__title">Results</h1>
      <p className="results__dominant">{resultTitle}</p>
      <div className="results__score">
        <p className="results__subtitle">Total scores</p>
        <ul className="results__traits" role="list">
          {SCORE_TRAITS.map((trait) => (
            <li key={trait} className="results__trait">
              <span className="results__trait-name">{formatTraitLabel(trait)}</span>
              <span className="results__trait-value">{finalScore[trait] ?? 0}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="screen__actions">
        <button type="button" className="btn btn--primary" onClick={onRestart}>
          Restart
        </button>
        <button type="button" className="btn btn--secondary" onClick={onContinue}>
          Continue
        </button>
      </div>
    </section>
  )
}

export default Results
