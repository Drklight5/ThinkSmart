import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { quizJ } from "../test/quix";
import QuizContext from "../Control/quizContext";
import Question from "../Components/Quiz/Question";
import Options from "../Components/Quiz/Options";

export default function Play() {
    const {id} = useParams();
    const [quiz, setQuiz] = useState(quizJ)
    

    useEffect(() => {
        setQuiz(p => ({...p, "position": 0}))
    }, [id])


    
  return (
    <>
       <QuizContext.Provider value={[quiz, setQuiz]}>
            
            <h1 className="t-white">{quiz.name}</h1>
            <Question></Question>
            <Options></Options>

       </QuizContext.Provider>
    </>
  )
}
