import he from 'he'
import { nanoid } from 'nanoid'

const Answer = props => {
  function getAnswerColor(showAnswer, correctAnswer, playerAnswer) {
    return playerAnswer === correctAnswer ? ' correct' : ' wrong'
  }

  return (
    <div key={nanoid()}>
      <div className="answers">
        {props.questionAnswer.randomized_answers.map(answer => {
          let classes = ''
          // Look for a previous answer for this answer
          const foundPrevAnswer = props.playerAnswers.find(answer => answer.question === props.questionAnswer.question)

          // If current answer match previous answer
          if (foundPrevAnswer?.answer === answer) {
            classes = " selected"
          }

          if (props.showAnswers) {
            // if current answer is the correct answer
            if (answer === props.questionAnswer.correct_answer) {
              classes += foundPrevAnswer?.answer === answer ? " succeeded" : " failed"
            }
            else {
              classes += ' wrong-answer'
            }
          }

          return (
            <button
              className={`small${classes}`}
              key={nanoid()}
              onClick={() => props.handleSelectAnswer(props.questionAnswer.question, answer)}
            >
              {he.decode(answer)}
            </button>
          )
        })}
      </div>
    </div >
  )
}

export default Answer
