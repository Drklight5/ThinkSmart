import { useContext } from "react"
import QuizContext from "../../Control/quizContext"
import { _History, _QuizManager } from "../../Control/API"
import UserContext from "../../Control/userContext"
import { useNavigate } from "react-router-dom"

export default function Send() {
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate()
  const [User, setUser] = useContext(UserContext)
  const [quiz, setQuiz] = useContext(QuizContext)
  let q = quiz?.preguntas
  let qs = q[quiz.position]?.selected
  let a = qs != null && q != undefined

  const style = () => {
    let s = a ? "pointer bg-secondary" : "bg-secondary-off"
    return "t-white btn-send " + s
  }

  const check = () => {

    if (q[quiz.position].selected != "" && q[quiz.position].confianza != "") {
      console.log()
      q[quiz.position].check = true
      setQuiz(prev => ({ ...prev, questions: q }))
    }
  }
  const answeredAll = () => {
    return quiz.preguntas.every(pregunta => pregunta.selected != "" && pregunta.confianza !== "" && pregunta.check);
  }

  const enviar = async () => {
    // Llama al historial para tener el ID
    let h = await _History.getHistoryId(User.id, quiz.idQuiz)
    let idH = h[0].idHistorial
    // Sube cada pregunta a la base de datos
    let preguntas = quiz.preguntas

    preguntas.forEach((element) => {
      // Se checa si la respuesta es correcta
      let correcta = element.selected == element.correcta
      let confianza = JSON.parse(quiz.confianza).indexOf(element.confianza)

      console.log(User.id, quiz.idQuiz, correcta, confianza, idH)
      let p = _QuizManager.answerQuestion(User.id,quiz.idQuiz,correcta,confianza, idH)
      
    });

    navigate("/results/"+quiz.idQuiz)
      
    // Se redirecciona a respuestas
  }
  const siguiente = () => setQuiz((prev) => ({ ...prev, "position": Math.min(prev.questions.length - 1, prev.position + 1) }))

  if (answeredAll()) {
    return <div className={style()} onClick={enviar} >Enviar Quiz</div>
  }
  else if (q[quiz.position].check) {
    return <div className={style()} onClick={siguiente} >Siguiente</div>
  }
  else {
    return (
      <div className={style()} onClick={check} >Enviar</div>
    )
  }

} 

