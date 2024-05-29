import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { quizJ } from "../../test/quix";
import QuizContext from "../../Control/quizContext";
import Question from "../../Components/Quiz/Question";
import Options from "../../Components/Quiz/Options";
import Send from "../../Components/Quiz/Send";
import Avatars from "../../Components/Quiz/Avatars";
import Trust from "../../Components/Quiz/Trust";
import { _QuizManager } from "../../Control/API";

export default function Play() {
    const {id} = useParams();
    const [quiz, setQuiz] = useState(null)
    

    useEffect(() => {
      callQuiz()

    }, [id])


    const callQuiz = async () => {
      let a = await _QuizManager.getQuiz(id)
      let b = await _QuizManager.getQuestions(id)
      a = a[0]
      a.position = 0
      a.preguntas = b.map((p) => ({...p, confianza:'', selected:''}))
      a.preguntas = a.preguntas.slice(0,3)

     
      console.log(a)
      setQuiz(a)
    }

  // const handleNameChange = (event) => {
  //   setQuiz(prev => ({ ...prev, nombre: event.target.value }))
  // }

  // const saveQuiz = async () => {

  //   // Primero modificar el quiz sin las preguntas y sin el valor de "position"
  //   let response = await _QuizManager.modifyQuiz(quiz.idQuiz, quiz.nombre, quiz.descripcion, quiz.confianza);

  //   // Luego actualizar cada pregunta
  //   for (let pregunta of quiz.questions) {
  //     response = await _QuizManager.modificarPregunta(pregunta.idPregunta, pregunta.texto, pregunta.opciones, pregunta.correcta);
  //   }

  // }
    
  return (
    <>
       <QuizContext.Provider value={[quiz, setQuiz]}>
            
            { 

              (quiz != null) && <>
                <h1 className="t-white">{quiz.nombre}</h1>
                <Question></Question>
                <Avatars></Avatars>
                <Options></Options>
                <Trust></Trust>
                <Send></Send>
              </>
            }
            
       </QuizContext.Provider>
    </>
  )
}
