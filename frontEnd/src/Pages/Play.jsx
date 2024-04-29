import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { quizJ } from "../test/quix";
import QuizContext from "../Control/quizContext";
import Question from "../Components/Quiz/Question";
import Options from "../Components/Quiz/Options";
import Send from "../Components/Quiz/Send";
import Avatars from "../Components/Quiz/Avatars";
import Trust from "../Components/Quiz/Trust";

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
            <Avatars></Avatars>
            <Options></Options>
            <Trust></Trust>
            <Send></Send>

       </QuizContext.Provider>
    </>
  )
}
