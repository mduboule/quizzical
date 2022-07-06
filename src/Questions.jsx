import he from 'he'
import { nanoid } from 'nanoid'
import Answers from './Answers'

const Questions = props => {
  const questionsAnswersElm = props.questions.map(questionAnswer => {
    const allAnswers = [questionAnswer.correct_answer, ...questionAnswer.incorrect_answers]
    return (
      <div className="question" key={nanoid()}>
        <h2>{he.decode(questionAnswer.question)}</h2>
        <Answers
          selectAnswer={props.selectAnswer}
          playerAnswers={props.playerAnswers}
          question={questionAnswer.question}
          allAnswers={allAnswers} />
      </div>
    )
  })

  return questionsAnswersElm
}

export default Questions
