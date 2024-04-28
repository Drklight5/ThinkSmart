import { useContext } from "react"
import QuizContext from "../../Control/quizContext"

export default function Send() {
    // eslint-disable-next-line no-unused-vars
    const [quiz, setQuiz] = useContext(QuizContext)
    let q = quiz?.questions
    let qs = q[quiz.position]?.selected
    let a = qs != null && q != undefined 

    const style = () => {
        let s = a ? "bg-secondary": "bg-secondary-off"
        return "t-white btn-send " + s
    }

    const check = () => {
        if (q[quiz.position].selected != null || q[quiz.position].selected != undefined){
            q[quiz.position].check = true
                setQuiz(prev => ({ ...prev, questions: q }))
        }
    }

  return (
    <div className={style()} onClick={check} >Enviar</div>
  )
}
