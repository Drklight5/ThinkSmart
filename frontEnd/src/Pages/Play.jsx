import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { quizJ } from "../test/quix";
import QuizContext from "../Control/quizContext";

export default function Play() {
    const {id} = useParams();
    const [quiz, setQuiz] = useState(quizJ)
    useEffect(() => {
     console.log(id)
    }, [])
    
  return (
    <>
       <QuizContext.Provider value={[quiz, setQuiz]}>

       </QuizContext.Provider>
    </>
  )
}
