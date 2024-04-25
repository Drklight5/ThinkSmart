/* eslint-disable react/prop-types */

import "./components.css"

export default function Quiz({quiz}) {
  return (
    <div className="quiz">
        <div>
              {quiz.quiz}
              <br />
              {quiz.area}
        </div>

        <div className="">
            <button className="bg-secondary t-white"> Iniciar</button>
        </div>
    </div>
  )
}
