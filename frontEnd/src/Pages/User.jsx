
import { Route, Routes } from "react-router-dom"
import Quizzes from "../Components/Quizzes"
import Play from "./Play"

function User() {
  return (
    <>
    <Routes>
        <Route path="play/:id" element={<Play/>}/>
        <Route path="" element={
          <div>
            <h1 className="t-white"> QUIZZES</h1>
            <Quizzes></Quizzes>
          </div>
        } />
    </Routes>
    
    </>
    
  )
}


export default User
