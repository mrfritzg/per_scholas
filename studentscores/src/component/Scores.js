const Scores = ({ score }) => {
//  console.log(score)
    return (
        <div key={score.id}>
            <p> Date: {score.date} // Score: {score.score}</p>
        </div>

    )
}

export default Scores;