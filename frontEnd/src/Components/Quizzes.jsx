import { useState } from "react";
import Quiz from "./Quiz";
import {quizz} from "../test/quizzes" 

export default function Quizzes() {
  // eslint-disable-next-line no-unused-vars
  const [quizzes, setQuizzes] = useState(quizz); // Use plural for an array

  // useEffect(() => {
  // //   fetch("../test/quizzes.json")
  // //     .then((response) => response.json())
  // //     .then((data) => setQuizzes(data)) 
  // //     .catch((error) => console.error(error)); 
  // // }
  //   // fetch("https://a00835977.pythonanywhere.com/")
  // }
  // , []); 

  return (
    <div className="quizzes">
      {quizzes.map((quiz, index) => (
        <Quiz quiz={quiz} key={index} />
      ))}
    </div>
  );
}
