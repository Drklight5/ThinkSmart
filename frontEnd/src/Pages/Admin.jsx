import { Route, Routes } from "react-router-dom"
import Quizzes from "../Components/Quizzes"
import Edit from "./Edit"

function Admin() {
  return (
    <div>
      <Routes>
          <Route path="/edit" element={<Edit/>} />

          <Route path="/" element={
            <>
              <h1 className=""> QUIZZES</h1>
              <Quizzes></Quizzes>
                <div className="flex fx-j-cen"> 
                  <div className="addQuiz">+</div>
                </div>
            </>
          }/>
      </Routes>
      
    </div>
  )
}

export default Admin
