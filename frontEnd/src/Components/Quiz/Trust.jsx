// import { useContext } from "react";
// import QuizContext from "../../Control/quizContext";
// fuente: https://codepen.io/brandonmcconnell/pen/Zqjdmg
import "./quiz.scss"

const Trust = () => {
    // const [quiz, setQuiz] = useContext(QuizContext)


    return (
        <div className="trust-div">
         
            <div id="htmlForm-wrapper">
                <htmlForm className="confidence t-primary">
                    <p id="htmlForm-title ">Trust</p>
                    <div id="debt-amount-slider">
                        <input type="radio" name="debt-amount" id="1" value="0" required />
                        <label htmlFor="1" data-debt-amount="Bajo"></label>
                        <input type="radio" name="debt-amount" id="2" value="1" required />
                        <label htmlFor="2" data-debt-amount="Medio"></label>
                        <input type="radio" name="debt-amount" id="3" value="2" required />
                        <label htmlFor="3" data-debt-amount="Alto"></label>
                        <div id="debt-amount-pos"></div>
                    </div>
                </htmlForm>
            </div>

        </div>
    )
}
export default Trust
