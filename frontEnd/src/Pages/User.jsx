
import { Link, Route, Routes } from "react-router-dom"
import Quizzes from "../Components/Quizzes"
import Play from "./Play"
import Grupo from "../Components/Grupo"

function User() {
  return (
    <>
    <Routes>
        <Route path="play/:id" element={<Play/>}/>
        <Route path="grupo" element={<Grupo />} />
        <Route path="" element={
          <div>
            <h1 className="t-white"> QUIZZES</h1>
            <Link to="grupo" className="t-white" >Grupos</Link>
            <Quizzes></Quizzes>
          </div>
        } />
    </Routes>
    
    </>
    
  )
}


export default User
