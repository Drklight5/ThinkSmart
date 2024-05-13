import { useContext } from "react"
import QuizContext from "../../Control/quizContext"

export default function Question() {
    const [quiz, setQuiz] = useContext(QuizContext)

    const moveLeft = () => setQuiz((prev) => ({ ...prev, "position": Math.max(0, prev.position - 1) }))
    const moveRight = () => setQuiz((prev) => ({ ...prev, "position": Math.min(prev.questions.length - 1, prev.position + 1) }))

    const handleQuestionChange = (e) => {
        const newQuestions = [...quiz.questions];
        newQuestions[quiz.position].question = e.target.value;
        setQuiz(prev => ({ ...prev, questions: newQuestions }));
    }

    return (
        <div className="d-question">
            <span onClick={moveLeft}>{"<"}</span>
            <div className="bg-whiteE quest">
                <div className="preg">PREGUNTA {quiz.position + 1}</div>
                {/* <div className="admin"></div> */}
                <input
                    type="text"
                    value={quiz?.questions[quiz.position]?.question}
                    onChange={handleQuestionChange}
                />
            </div>
            <span onClick={moveRight}>{">"}</span>
        </div>
    )
}