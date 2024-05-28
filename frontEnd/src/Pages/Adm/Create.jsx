import { useContext, useState } from "react";
import NewQuestion from "../../Components/Admin/NewQuestion";
import QuizContext from "../../Control/quizContext";
import QuestionEdit from "../../Components/Admin/QuestionEdit";
import OptionsEdit from "../../Components/Admin/OptionsEdit";
import { createQuestion, createQuiz } from "../../Models/Quiz";


export default function Create() {
  const [quiz, setQuiz] = useState(createQuiz)

  const handleInputChange = (e) => setQuiz((p) => ( { ...p, [e.target.name]: e.target.value }))

  return (
    <div style={{ color: 'black' }}>
      
      <QuizContext.Provider value={[quiz, setQuiz]}>
        <h1 className="materia">
          <input
            type="text"
            name="name"
            value={quiz.name}
            onChange={handleInputChange}
            placeholder="Nombre del Quiz"
          />


        </h1> 
        <div className="p-3">
          <label htmlFor="topic">Tema</label>         
          <input
              className="topic-input"
              type="text"
              name="topic"
              value={quiz.topic}
              placeholder="Tema del quiz"
              onChange={handleInputChange}
            />
        </div>
        
        <QuestionEdit></QuestionEdit>
        <OptionsEdit></OptionsEdit>
        <NewQuestion></NewQuestion>
      </QuizContext.Provider>
    </div>
  )
}