/* eslint-disable no-unused-vars */
import { useContext } from "react"
import UserContext from "../Control/userContext"
import { useNavigate } from "react-router-dom"
import "./Auth.css"

export default function Auth() {
    const [User, setUser] = useContext(UserContext)
    const navigate = useNavigate()

    const logIn = () => {
        // Set User, then redirects
        setUser({username: "MyUser", id: "123", role: "User"})
        navigate("/")
    }
    const logInA = () => {
        setUser({ username: "MyUser", id: "123", role: "Admin" })
        navigate("/")
    }

  return (
    <div className="container">
        <div className="banner">

        </div>
        <div className="logIn">
            <h1 className="t-white ts-1 t-center">Inciar sesion</h1>
            <div className="">
                <label htmlFor="">Usuario</label>
                <br />
                <input type="text" />
                <br />
                <label htmlFor="">Password</label>
                <br />
                <input type="password" name="" id="" />
                <br />

                
                <button className="bg-secondary t-white" onClick={logInA}>LogIn as Administrator</button>
                <br />
                <button className="bg-secondary t-white" onClick={logIn}>LogIn as User</button>
            </div>
        </div>
    </div>
  )
}
