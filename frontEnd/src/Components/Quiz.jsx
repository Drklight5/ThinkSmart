/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import UserContext from "../Control/userContext"


export default function Quiz({quiz}) {
  
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useContext(UserContext)

  const navigate = useNavigate()
  
  const isUser = user.role == "User"
  const text = isUser ? "Iniciar" : "Editar"
  let   link = isUser ? "play" : "edit"
        link += "/" + quiz.id

  const redirect = () => navigate(link)


  return (
    <div className="quiz">
        <div>
              <h2 color="t-primary">{quiz.name}</h2>
              <br />
              {quiz.topic}
        </div>

        <div className="">
            <button className="bg-secondary t-white" onClick={redirect}>{text}</button>
        </div>
    </div>
  )
}
