import { useContext, useEffect, useState } from "react";
import QuizContext from "../../Control/quizContext";

export default function Options() {
  const [quiz, setQuiz] = useContext(QuizContext);
  const [opciones, setOptions] = useState(() => {
    const currentOptions = quiz?.preguntas[quiz.position]?.opciones;
    return typeof currentOptions === 'string' ? JSON.parse(currentOptions) : currentOptions;
  });

  useEffect(() => {
    const currentOptions = quiz?.preguntas[quiz.position]?.opciones;
    setOptions(typeof currentOptions === 'string' ? JSON.parse(currentOptions) : currentOptions);
  }, [quiz]);



  const optStyle = (i) => {
    let q = quiz.preguntas[quiz.position];

    let s = "";
    if (q.check === true && opciones[i] == q.selected) {
      console.log(q)
      s = (q.correcta === opciones[i]) ? "selectOpt-true": "selectOpt-false"
    } 
    else  s = q.selected === opciones[i] ? "selectOpt" : "";
    
    return "opt " + s;
  };

  const select = (i) => {
    let c = quiz.preguntas[quiz.position].check;
    if (c !== true) selectOpt(i);
  };

  const selectOpt = (i) => {
    let qs = quiz.preguntas;
    let se = qs[quiz.position].selected;

    qs[quiz.position].selected = opciones[i];
    setQuiz((prev) => ({ ...prev, preguntas: qs }));
  };
  return (
    <div className="d-options">
      {opciones?.map((opt, i) => (
        <div
          key={i}
          onClick={() => select(i)}
          className={optStyle(i)}
        >
          {opt}
        </div>
      ))}

    </div>

  );
}
