/* eslint-disable no-unused-vars */
import { useContext } from "react"
import UserContext from "../Control/userContext"
import { useNavigate } from "react-router-dom"


export default function Auth() {
    const [User, setUser] = useContext(UserContext)
    const navigate = useNavigate()

    const logIn = () => {
        setUser({username: "MyUser", id: "123"})
        
        navigate("/")
    }
  return (
    <div>
        <h1>Auth</h1>
        <button onClick={logIn}>LogIn</button>
    </div>
  )
}
