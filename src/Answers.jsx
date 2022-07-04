import he from 'he'
import { nanoid } from 'nanoid'

const Answer = props => {
  return (
    <div key={nanoid()}>
      <div className="answers">
        {props.allAnswers.map(answer => {
          let classes = ''
          const foundPrevAnswer = props.playerAnswers.find(answer => answer.question === props.question)
          if (foundPrevAnswer?.answer === answer) {
            classes = " selected"
          }

          return (
            <button
              className={`small${classes}`}
              key={nanoid()}
              onClick={() => props.selectAnswer(props.question, answer)}
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
