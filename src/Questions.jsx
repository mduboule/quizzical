import he from 'he'
import { nanoid } from 'nanoid'
import Answers from './Answers'
import { useState } from 'react'

const Questions = props => {
  const questionsAnswersElm = props.questions.map(questionAnswer => {
    return (
      <div className="question" key={nanoid()}>
        <h2>{he.decode(questionAnswer.question)}</h2>
        <Answers
          handleSelectAnswer={props.handleSelectAnswer}
          playerAnswers={props.playerAnswers}
          showAnswers={props.showAnswers}
          questionAnswer={questionAnswer}
        />
      </div>
    )
  })

  return questionsAnswersElm
}

export default Questions
