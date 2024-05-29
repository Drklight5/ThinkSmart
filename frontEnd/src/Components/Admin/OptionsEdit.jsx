import { useContext } from "react"
import QuizContext from "../../Control/quizContext"

export default function Options() {
    const [quiz, setQuiz] = useContext(QuizContext)
    const options = JSON.parse(quiz?.questions[quiz.position]?.opciones)
    const selectOpt = (i) => {
        let qs = quiz.questions
        let se = qs[quiz.position].selected 
        let s = se  == i ? null : i
        qs[quiz.position].selected = s
        setQuiz(prev => ({...prev, questions: qs}))
    }

    const handleOptionChange = (i, e) => {
        const newQuestions = [...quiz.questions];
        newQuestions[quiz.position].options[i] = e.target.value;
        setQuiz(prev => ({ ...prev, questions: newQuestions }));
    }

    const onClick = (i, e) => {
        const newQuestions = [...quiz.questions];
        newQuestions[quiz.position].correcta = e.target.value;
        setQuiz(prev => ({ ...prev, questions: newQuestions }));
    }

    const optStyle = (i) => {
        

    }
    return (
        <div className="d-options">
            {options?.map((option, i) => (
                <div key={i} className="optE" onClick={() => selectOpt(i)}> 
                    <input
                        className={optStyle(i)}
                        type="text"
                        value={option}
                        onChange={(e) => handleOptionChange(i, e)}
                        onClick = {e => onClick(i,e)}
                    />
                </div>
            ))}
        </div>
    )
}