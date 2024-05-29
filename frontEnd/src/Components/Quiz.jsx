/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import UserContext from "../Control/userContext"


export default function Quiz({quiz}) {
  
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useContext(UserContext)

  const navigate = useNavigate()
  
  const isUser = user.role == "user"
  const text = isUser ? "Iniciar" : "Editar"
  let   link = isUser ? "play" : "edit"
        link += "/" + quiz.idQuiz

  const redirect = () => navigate(link)
  const seeResults = () => navigate('/results/' + quiz.idQuiz)

  return (
    <div className="quiz">
        <div>
              <h2 color="t-primary">{quiz.nombre}</h2>
              <br />
              {quiz.descripcion}
        </div>

        <div className="">
            <button className="bg-secondary t-white " onClick={seeResults}> Resultados </button>
            <button className="bg-secondary t-white mx-3" onClick={redirect}> {text} </button>
        </div>
    </div>
  )
}
