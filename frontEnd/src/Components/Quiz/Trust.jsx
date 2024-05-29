import { useContext, useEffect, useState } from "react";
import QuizContext from "../../Control/quizContext";
import "./quiz.scss";

const Trust = () => {
    const [quiz, setQuiz] = useContext(QuizContext);
    const [confidence, setConfidence] = useState(0)

    useEffect(() => {
        const Confidence = quiz?.preguntas[quiz.position]?.confianza;
        const options = JSON.parse(quiz.confianza);
        const c = options.indexOf(Confidence) != -1
            ? options.indexOf(Confidence)
            : Math.floor(options.length / 2);

        setConfidence(c);
        onChange(c)
    }, [quiz.position]);

    const onChange = (i) => {
        let a = JSON.parse(quiz.confianza);
        let copy = { ...quiz };
        copy.preguntas[copy.position].confianza = a[i];
        setQuiz(copy);

        console.log(copy)
        setConfidence(i);
    };

    return (
        <div className="trust-div">
            <div id="form-wrapper">
                <form className="confidence t-primary">
                    <p id="form-title">Nivel de confianza</p>
                    <div id="debt-amount-slider">
                        {
                            JSON.parse(quiz.confianza).map((e, i) => (
                                <>
                                    <input
                                        key={i}
                                        type="radio"
                                        name="debt-amount"
                                        id={1 + i}
                                        value={i}
                                        required
                                        onChange={() => onChange(i)}
                                        checked={confidence === i}
                                    />
                                    <label htmlFor={i + 1} data-debt-amount={e}></label>
                                </>
                            ))
                        }
                        <div id="debt-amount-pos"></div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Trust;
