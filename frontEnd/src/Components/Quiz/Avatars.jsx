import { useContext } from "react"
import QuizContext from "../../Control/quizContext"


export default function Avatars() {
    // eslint-disable-next-line no-unused-vars
    const [quiz, setQuiz] = useContext(QuizContext)
    const q = quiz?.preguntas[quiz.position]


    const sty_av = () => {
        if (q?.check) {
            return (Math.random() >= 0.5) ? "selectOpt-true" : "selectOpt-false"
        }
        else {
           return "" 
        }
        
    }

    const sty_main = () => {
        let s = "main-avatar "
        
        if (q?.check) {
            return s + (q.selected == q.correcta? "selectOpt-true" : "selectOpt-false")
        }
        else {
            return s
        }
    }

  return (
    <div className="avatars">

        <div className={sty_av()}>

        </div>
        <div className={sty_main()}>

        </div>
          <div className={sty_av()}>

        </div>
    </div>
  )
}
