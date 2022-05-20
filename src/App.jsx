import yellow from './images/yellow.png'
import blue from './images/blue.png'
import Questions from './Questions'
import { useEffect, useState } from 'react'

function App() {
  const [gameOn, setGameOn] = useState(false)
  const [questions, setQuestions] = useState([])

  function handleStartGame() {
    setGameOn(true)
  }

  useEffect(() => {
    const fetchQuestions = async () => {
      const result = await fetch('https://opentdb.com/api.php?amount=5')
      const data = await result.json()
      console.log(data.results)
      setQuestions(data.results)
    }
    fetchQuestions()
  }, [])

  return (
    <main>
      <img src={blue} className="blue-shape" />
      <img src={yellow} className="yellow-shape" />
      {!gameOn && (
        <>
          <h1>Quizzical</h1>
          <p>You think you know it all…</p>
          <button className="start-game big" onClick={handleStartGame}>Start Quiz</button>
        </>
      )}
      {gameOn && <>
        <Questions questions={questions} />
        <button className='medium check-answers'>Check answers</button>
      </>
      }
    </main>
  )
}

export default App
