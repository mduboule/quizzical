const Landing = props => {
  return (
    <>
      <h1>Quizzical</h1>
      <p>You think you know it all…</p>
      <button className="start-game big" onClick={props.handleClick}>Start Quiz</button>
    </>
  )
}

export default Landing
