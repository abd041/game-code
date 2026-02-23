import { useState, useCallback } from 'react'
import { SCREENS } from './data/screens.js'
import { QUESTIONS, SCORE_TRAITS } from './data/questions.js'
import {
  MainMenu,
  GameScreen,
  Results,
  About,
  RestartEnd,
} from './components/screens'

const TOTAL_QUESTIONS = QUESTIONS.length

const INITIAL_SCORE = Object.fromEntries(SCORE_TRAITS.map((t) => [t, 0]))

/** Merge all answer score objects into one aggregated result. */
function computeFinalScore(answers) {
  return answers.reduce(
    (result, { score: optionScore }) => {
      SCORE_TRAITS.forEach((trait) => {
        result[trait] = (result[trait] || 0) + (optionScore[trait] || 0)
      })
      return result
    },
    { ...INITIAL_SCORE }
  )
}

function App() {
  const [currentScreen, setCurrentScreen] = useState(SCREENS.MAIN_MENU)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState([])
  const [finalScore, setFinalScore] = useState(() => ({ ...INITIAL_SCORE }))

  const goToScreen = useCallback((screen) => {
    setCurrentScreen(screen)
  }, [])

  const startGame = useCallback(() => {
    setAnswers([])
    setCurrentQuestionIndex(0)
    setCurrentScreen(SCREENS.GAME)
  }, [])

  const handleAnswer = useCallback((questionId, optionIndex) => {
    const question = QUESTIONS.find((q) => q.id === questionId)
    const option = question?.options[optionIndex]
    const score = option?.score ? { ...option.score } : {}
    const newAnswer = { questionId, optionIndex, score }
    const newAnswers = [...answers, newAnswer]
    setAnswers(newAnswers)

    const nextIndex = currentQuestionIndex + 1
    if (nextIndex >= TOTAL_QUESTIONS) {
      setFinalScore(computeFinalScore(newAnswers))
      setCurrentQuestionIndex(0)
      setCurrentScreen(SCREENS.RESULTS)
    } else {
      setCurrentQuestionIndex(nextIndex)
    }
  }, [currentQuestionIndex, answers])

  const goToRestartEnd = useCallback(() => {
    setCurrentScreen(SCREENS.RESTART_END)
  }, [])

  const restart = useCallback(() => {
    startGame()
  }, [startGame])

  const endToMenu = useCallback(() => {
    setAnswers([])
    setCurrentQuestionIndex(0)
    setCurrentScreen(SCREENS.MAIN_MENU)
  }, [])

  const renderScreen = () => {
    switch (currentScreen) {
      case SCREENS.MAIN_MENU:
        return (
          <MainMenu
            onStartGame={startGame}
            onAbout={() => goToScreen(SCREENS.ABOUT)}
          />
        )
      case SCREENS.GAME:
        return (
          <GameScreen
            question={QUESTIONS[currentQuestionIndex]}
            questionIndex={currentQuestionIndex}
            totalQuestions={TOTAL_QUESTIONS}
            onAnswer={handleAnswer}
          />
        )
      case SCREENS.RESULTS:
        return (
          <Results
            finalScore={finalScore}
            onContinue={goToRestartEnd}
            onRestart={restart}
          />
        )
      case SCREENS.ABOUT:
        return (
          <About
            onBack={() => goToScreen(SCREENS.MAIN_MENU)}
          />
        )
      case SCREENS.RESTART_END:
        return (
          <RestartEnd
            onRestart={restart}
            onEnd={endToMenu}
          />
        )
      default:
        return (
          <MainMenu
            onStartGame={startGame}
            onAbout={() => goToScreen(SCREENS.ABOUT)}
          />
        )
    }
  }

  return (
    <main className="app">
      <div key={currentScreen} className="screen-transition">
        {renderScreen()}
      </div>
    </main>
  )
}

export default App
