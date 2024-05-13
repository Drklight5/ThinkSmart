import { Route, Routes, Link} from "react-router-dom"
import Quizzes from "../Components/Quizzes"
import Edit from "./Edit"
import Create from "./Create"


function Admin() {
  return (
    <div>
      <Routes>
          <Route path="/edit/:id" element={<Edit/>} />
          <Route path="/create" element={<Create/>} />

          <Route path="/" element={
            <>
              <h1 className=""> QUIZZES</h1>
              <Quizzes></Quizzes>
              <div className="flex fx-j-cen"> 
              <Link to="/create" style={{ textDecoration: 'none' }}>
                <button className="addQuiz">+</button>
            </Link>
            </div>
            </>
          }/>
      </Routes>
      
    </div>
  )
}


export default Admin
