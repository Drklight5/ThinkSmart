import { Route, Routes, Link } from "react-router-dom"
import Quizzes from "../../Components/Quizzes"
import { useNavigate } from "react-router-dom"
import Edit from "./Edit"
import Create from "./Create"
import Chatbot from "../chatbot" // Asegúrate de que esta ruta es correcta
import { useContext } from "react"
import UserContext from "../../Control/userContext"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../../Firebase/firebase"
import GroupsAdm from "./GroupsAdm"

function Admin() {
  const [user, setUser] = useContext(UserContext)


  return (
    <div>
      <Routes>
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/groups" element={<GroupsAdm />} />


        <Route path="/" element={
          <>
            <h1 className=""> QUIZZES</h1>
            {/* <Link to="groups" style={{ textDecoration: 'none' }}>
              <button className="btn bg-secondary">Grupos</button>
            </Link> */}
            <Quizzes></Quizzes>
            <div className="flex fx-j-cen">
              <Link to="create" style={{ textDecoration: 'none' }}>
                <button className="addQuiz">+</button>
              </Link>
            </div>
            <div className="flex fx-j-rig">
              <Link to="/chatbot" style={{ textDecoration: 'none' }}>
                <button className="bg-secondary t-white">Chatbot</button>
              </Link>
            </div>
          </>
        } />
      </Routes>
    </div>
  );
}

export default Admin;