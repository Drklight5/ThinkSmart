import { useState } from "react";
import NewQuestion from "../Components/Admin/NewQuestion";
import QuizContext from "../Control/quizContext";
import QuestionEdit from "../Components/Admin/QuestionEdit";
import OptionsEdit from "../Components/Admin/OptionsEdit";


export default function Create() {
  const [quiz, setQuiz] = useState({})
  const handleInputChange = (e) => {
    setValue((prevData) => (
      { ...prevData, [e.target.name]: e.target.value }))
    console.log(e.target.value)
  }

  return (
    <div style={{ color: 'black' }}>
      
      <QuizContext.Provider value={[quiz, setQuiz]}>
        s
        <h1 className="materia">
          <input
            type="text"
            name="name"
            value={quiz.name}
            onChange={handleInputChange}
          />
        </h1>
        <QuestionEdit></QuestionEdit>
        <OptionsEdit></OptionsEdit>
        <NewQuestion></NewQuestion>
      </QuizContext.Provider>
    </div>
  )
}