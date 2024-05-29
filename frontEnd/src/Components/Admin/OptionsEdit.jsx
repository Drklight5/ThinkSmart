import { useContext, useEffect, useState } from "react";
import QuizContext from "../../Control/quizContext";

export default function Options() {
    // Obtén el contexto del quiz
    const [quiz, setQuiz] = useContext(QuizContext);

    // Inicializa el estado de las opciones
    const [options, setOptions] = useState(() => {
        const currentOptions = quiz?.questions[quiz.position]?.opciones;
        return typeof currentOptions === 'string' ? JSON.parse(currentOptions) : currentOptions;
    });

    // Actualiza las opciones cuando cambie el quiz
    useEffect(() => {
        const currentOptions = quiz?.questions[quiz.position]?.opciones;
        setOptions(typeof currentOptions === 'string' ? JSON.parse(currentOptions) : currentOptions);
    }, [quiz]);

    // Maneja la selección de una opción
    const selectOpt = (i) => {
        const qs = [...quiz.questions];
        const selected = qs[quiz.position].selected;
        qs[quiz.position].selected = selected === i ? null : i;
        setQuiz(prev => ({ ...prev, questions: qs }));
    };

    // Maneja los cambios en el texto de las opciones
    const handleOptionChange = (i, e) => {
        const newOptions = [...options];
        newOptions[i] = e.target.value;
        setOptions(newOptions);

        const newQuestions = [...quiz.questions];
        newQuestions[quiz.position].opciones = newOptions;
        setQuiz(prev => ({ ...prev, questions: newQuestions }));
    };

    // Maneja el clic en una opción para marcarla como correcta
    const onClick = (i, e) => {
        e.stopPropagation(); // Evita que el clic en el input dispare selectOpt
        const newQuestions = [...quiz.questions];
        newQuestions[quiz.position].correcta = i;
        setQuiz(prev => ({ ...prev, questions: newQuestions }));
    };

    // Estilo para las opciones (esto puede ser personalizado)
    const optStyle = (i) => {
        return quiz.questions[quiz.position].selected === i ? "selected" : "";
    };

    return (
        <div className="d-options">
            {options?.map((option, i) => (
                <div key={i} className="optE" onClick={() => selectOpt(i)}>
                    <input
                        className={optStyle(i)}
                        type="text"
                        value={option}
                        onChange={(e) => handleOptionChange(i, e)}
                        onClick={(e) => onClick(i, e)}
                    />
                </div>
            ))}
        </div>
    );
}
