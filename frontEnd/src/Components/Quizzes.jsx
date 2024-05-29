import { useContext, useEffect, useState } from "react";
import Quiz from "./Quiz";
import { _QuizManager } from "../Control/API";
import UserContext from "../Control/userContext";

export default function Quizzes() {
  // eslint-disable-next-line no-unused-vars
  const [quizzes, setQuizzes] = useState([]); // Use plural for an array
  const [user, setUser] = useContext(UserContext)

  useEffect(() => {
    getQuiz()
  }, []);

  const getQuiz = async () => {
    let quiz = await _QuizManager.getQuizzes()
    setQuizzes(quiz)
  }

  return (
    <div className="quizzes">
      {quizzes.length > 0 ?
        quizzes.map((quiz, index) => (
          <Quiz quiz={quiz} key={index} />
        ))
        : <p>No hay quizzes</p>
      }
    </div>
  );
}
