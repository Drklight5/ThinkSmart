import { useContext } from "react"
import QuizContext from "../../Control/quizContext"

export default function Options() {
    // eslint-disable-next-line no-unused-vars
    const [quiz, setQuiz] = useContext(QuizContext)
    const options = quiz?.questions[quiz.position]?.options

  return (
    <div className="options">
        {options?.map((opt, i) =>
            <div key={i} className="opt">
                {opt}
            </div>
        )}
    </div>
  )
}
