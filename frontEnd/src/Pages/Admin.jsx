import { Route, Routes, Link} from "react-router-dom"
import Quizzes from "../Components/Quizzes"
import { useNavigate } from "react-router-dom"
import Edit from "./Edit"
import Create from "./Create"
import Chatbot from "./chatbot" // Asegúrate de que esta ruta es correcta
import { useContext } from "react"
import UserContext from "../Control/userContext"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../Firebase/firebase"

function Admin() {
  const [user, setUser] = useContext(UserContext)
  console.log("aaa",user)

  console.log(useAuthState(auth))
  return (
    <div>
      <Routes>
          <Route path="/edit/:id" element={<Edit/>} />
          <Route path="/create" element={<Create/>} />
          <Route path="/chatbot" element={<Chatbot/>} />

          <Route path="/" element={
            <>
              <h1 className=""> QUIZZES</h1>
              <Quizzes></Quizzes>
              <div className="flex fx-j-cen"> 
                <Link to="/create" style={{ textDecoration: 'none' }}>
                  <button className="addQuiz">+</button>
                </Link>
              </div>
              <div className="flex fx-j-rig">
                <Link to="/chatbot" style={{ textDecoration: 'none' }}>
                  <button className="bg-secondary t-white">Chatbot</button>
                </Link>
              </div>
            </>
          }/>
      </Routes>
    </div>
  );
}

export default Admin;