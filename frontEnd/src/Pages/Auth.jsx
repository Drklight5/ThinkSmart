/* eslint-disable no-unused-vars */
import { useContext } from "react"
import UserContext from "../Control/userContext"
import { useNavigate } from "react-router-dom"
import { auth, provider } from '../Firebase/firebase'
import { getAuth, signInWithPopup } from "firebase/auth"
import { useAuthState } from 'react-firebase-hooks/auth'

export default function Auth() {
    const [User, setUser] = useContext(UserContext)
    const navigate = useNavigate()
    const auth = getAuth();
    const logIn = () => {
        // Set User, then redirects
        setUser({username: "MyUser", id: "123", role: "User"})
        navigate("/user")
    }
    const logInA = () => {
        setUser({ username: "MyUser", id: "123", role: "Admin" })
        navigate("/admin")
    }

    const pruebas = () =>{
        navigate("/pruebas")
    }

    const signin = async () => {
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error("Error signing in with Google:", error);
        }
    };




  return (
    <div className="container-auth">
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
                <button  onClick={signin}>Sign In with Google</button> 
                
                <button className="bg-secondary t-white" onClick={logInA}>LogIn as Administrator</button>
                <br />
                <button className="bg-secondary t-white" onClick={logIn}>LogIn as User</button>
                <br />
                <button className="bg-secondary t-white" onClick={pruebas}>Iniciar pruebas</button>
                
            </div>
        </div>
    </div>
  )
}
