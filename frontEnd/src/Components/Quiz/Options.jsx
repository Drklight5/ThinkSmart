import { useContext} from "react"
import QuizContext from "../../Control/quizContext"

export default function Options() {
    // eslint-disable-next-line no-unused-vars
  const [quiz, setQuiz] = useContext(QuizContext)
  const options = quiz?.questions[quiz.position]?.options

  const selectOpt = (i) => {

    let qs = quiz.questions
    let se = qs[quiz.position].selected 
    let s = se  == i ? null : i
   
    qs[quiz.position].selected = s
    setQuiz(prev => ({...prev, questions: qs}))
  }

  const optStyle = (i) => {
    let q = quiz.questions[quiz.position]
 
    let s = ""
    if (q.check == true ) {
      if (i == q.selected) s = "selectOpt-true" 
      if (q.correct != i && i == q.selected) s = "selectOpt-false"
  
    }else{
      s = q.selected == i ? "selectOpt" : ""
    }
    return "opt " + s

  }

  const select = (i) => {
    let c = quiz.questions[quiz.position].check
    if (c != true) selectOpt(i)
    
  } 

  return (
    <div className="options">
        {options?.map((opt, i) =>
            <div key={i} 
              onClick={() => select(i)}
              className={optStyle(i)}>
                {opt}
            </div>
        )}
    </div>
  )
}
