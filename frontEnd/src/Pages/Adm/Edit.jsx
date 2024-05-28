import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { quizE } from "../../test/editQuiz";
import QuizContext from "../../Control/quizContext";
import QuestionEdit from "../../Components/Admin/QuestionEdit";
import OptionsEdit from "../../Components/Admin/OptionsEdit";
import NewQuestion from "../../Components/Admin/NewQuestion";

export default function Play() {
  const {id} = useParams();
  const [quiz, setQuiz] = useState(quizE)

  useEffect(() => {
      setQuiz(p => ({...p, "position": 0}))
  }, [id])

  const handleNameChange = (event) => {
      setQuiz(prev => ({...prev, name: event.target.value}))
  }

  return (
      <QuizContext.Provider value={[quiz, setQuiz]}>
          <h1 className="materia">
              <input 
                  type="text" 
                  value={quiz.name} 
                  onChange={handleNameChange} 
              />
          </h1>
          
          <QuestionEdit></QuestionEdit>
          <OptionsEdit></OptionsEdit>
          <NewQuestion></NewQuestion>
      </QuizContext.Provider>
  )
}
