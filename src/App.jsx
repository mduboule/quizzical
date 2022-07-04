import Questions from './Questions'
import Landing from './Landing'
import { useEffect, useState } from 'react'

function App() {
  const [gameOn, setGameOn] = useState(false)
  const [questions, setQuestions] = useState([])
  const [playerAnswers, setPlayerAnswers] = useState([])

  function startGame() {
    console.log("setGameOn")
    setGameOn(true)
  }

  useEffect(() => {
    console.log(playerAnswers)
  }, [playerAnswers])

  function selectAnswer(question, answer) {
    setPlayerAnswers(prevAnswers => {
      const newAnswers = [...prevAnswers]
      const questionExists = newAnswers.find(answer => answer.question === question)
      // first time the question is answered
      if (!questionExists) {
        newAnswers.push({ question: question, answer: answer })
      }
      // user clicked on the same answer a second time
      else if (newAnswers[newAnswers.indexOf(questionExists)].answer === answer) {
        newAnswers.splice(newAnswers.indexOf(questionExists), 1)
      }
      // user changed their answer
      else {
        newAnswers[newAnswers.indexOf(questionExists)].answer = answer
      }
      return newAnswers
    })
  }

  useEffect(() => {
    console.log("fetching questions")
    const fetchQuestions = async () => {
      const result = await fetch('https://opentdb.com/api.php?amount=5')
      const data = await result.json()
      setQuestions(data.results)
    }
    fetchQuestions()
  }, [])

  return (
    <>
      <main>
        {!gameOn && <Landing handleClick={() => startGame()} />}
        {gameOn &&
          <>
            <Questions
              questions={questions}
              playerAnswers={playerAnswers}
              selectAnswer={selectAnswer}
            />
            <button className='medium check-answers'>Check answers</button>
          </>
        }
      </main>
    </>
  )
}

export default App
