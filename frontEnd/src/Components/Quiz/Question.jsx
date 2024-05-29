import { useContext } from "react"
import QuizContext from "../../Control/quizContext"


export default function Question() {
    // eslint-disable-next-line no-unused-vars
    const [quiz, setQuiz] = useContext(QuizContext)

    const moveLeft = () => setQuiz((prev) => ({ ...prev, "position": Math.max(0, prev.position - 1) }))
    const moveRight = () => setQuiz((prev) => ({ ...prev, "position": Math.min(prev.questions.length - 1, prev.position + 1) }))
 
    return (
    <div className="d-question">

        
        <span onClick={moveLeft}>{"<"}</span>

        <div className="bg-white quest">
            <div className="preg">PREGUNTA {quiz.position + 1}</div>
            <div className="admin"></div>
            
            {quiz?.preguntas[quiz.position]?.texto}
        </div>
        

        <span onClick={moveRight}>{">"}</span>
                
    </div>
    
  )
}
