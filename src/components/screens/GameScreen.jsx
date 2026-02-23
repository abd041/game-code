/**
 * Displays one question: dialogue text and 4 answer buttons.
 * On click: saves the option's score into answers, advances to next question
 * or (if last) merges all score objects and navigates to Results.
 */
function GameScreen({ question, questionIndex, totalQuestions, onAnswer }) {
  if (!question) return null

  const { id, text, options } = question
  const choices = (options || []).slice(0, 4)

  return (
    <section className="screen screen--game">
      <p className="screen__progress">
        Question {questionIndex + 1} of {totalQuestions}
      </p>
      <p className="screen__narrative">{text}</p>
      <ul className="choices" role="list">
        {choices.map((option, index) => (
          <li key={index}>
            <button
              type="button"
              className="btn btn--choice"
              onClick={() => onAnswer(id, index)}
            >
              {option.text}
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default GameScreen
