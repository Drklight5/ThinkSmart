import ShowUser from "../Components/ShowUser"
import Fondo from "../Components/Fondo"
import Quizzes from "../Components/Quizzes"

function User() {
  return (
    <div className="bg-info app">
      <Fondo></Fondo>
      <ShowUser></ShowUser>
      <div className="container">
        <h1 className="t-white"> QUIZZES</h1>
          <Quizzes></Quizzes>
      </div>
    </div>
  )
}


export default User
