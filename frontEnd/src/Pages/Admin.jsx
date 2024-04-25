import Fondo from "../Components/Fondo"
import Quizzes from "../Components/Quizzes"
import ShowUser from "../Components/ShowUser"

function Admin() {
  return (
    <div>
      <Fondo></Fondo>
      <ShowUser></ShowUser>
      <div className="container">
        <h1 className=""> QUIZZES</h1>
        <Quizzes></Quizzes>
        <div className="flex fx-j-cen"> 
          <div className="addQuiz">+</div>
        </div>

      </div>
    </div>
  )
}

export default Admin
