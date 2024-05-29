import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import QuizContext from "../../Control/quizContext";
import QuestionEdit from "../../Components/Admin/QuestionEdit";
import OptionsEdit from "../../Components/Admin/OptionsEdit";
import NewQuestion from "../../Components/Admin/NewQuestion";
import { _QuizManager } from "../../Control/API";

export default function Play() {
  const {id} = useParams();
  const [quiz, setQuiz] = useState(null)

  useEffect(() => {
     callQuiz()

  }, [id])

  const callQuiz =  async () => {
    let a = await _QuizManager.getQuiz(id)
    let b = await _QuizManager.getQuestions(id)
    a =  a[0]
    a.position = 0
    a.questions = b

    setQuiz(a)

  }

  const handleNameChange = (event) => {
      setQuiz(prev => ({...prev, name: event.target.value}))
  }

  const saveQuiz = async () =>{
    let a = _QuizManager.modifyQuiz()
  }
  return (
      <QuizContext.Provider value={[quiz, setQuiz]}>
            {quiz != null ? <>
                <h1 className="materia">
                    {console.log(quiz )}
                    <input 
                        type="text" 
                        value={quiz.nombre} 
                        onChange={handleNameChange} 
                    />
                </h1>
                
                <QuestionEdit></QuestionEdit>
                <OptionsEdit></OptionsEdit>
                <NewQuestion></NewQuestion>
                <button onClick={saveQuiz}>Guardar cambios</button>
            </>
            :
            <p>Cargando el Quiz</p>
            }
          
      </QuizContext.Provider>
  )
}
