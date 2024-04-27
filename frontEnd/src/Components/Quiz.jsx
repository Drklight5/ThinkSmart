/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom"

export default function Quiz({quiz}) {

  const navigate = useNavigate()
  const redirect = () => navigate("edit")
  
  return (
    <div className="quiz">
        <div>
              {quiz.name}
              <br />
              {quiz.topic}
        </div>

        <div className="">
            <button className="bg-secondary t-white" onClick={redirect}> Iniciar</button>
        </div>
    </div>
  )
}
