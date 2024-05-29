import { useContext } from "react";
import QuizContext from "../../Control/quizContext";

export default function NewQuestion() {
    const [quiz, setQuiz] = useContext(QuizContext);
    let q = quiz?.questions
    let qs = q[quiz.position]?.selected
    let a = qs != null && q != undefined 

    const style = () => {
        return "t-white btn-send pointer bg-secondary";
    }

    const addQuestion = () => {
        const newQuestion = {
            texto: "",
            opciones: '["Opción 1", "Opción 2", "Opción 3", "Option 4"]',
            correcta: null,
            idPregunta: null
        }

        setQuiz(prev => ({
            ...prev,
            questions: [...prev.questions, newQuestion],
            position: prev.questions.length // mover la posición a la nueva pregunta
        }))
    }

    return (
        <div className={style()} onClick={addQuestion}>Agregar Pregunta</div>
    )
}