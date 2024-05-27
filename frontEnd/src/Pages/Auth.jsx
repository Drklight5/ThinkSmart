/* eslint-disable no-unused-vars */
import { useContext } from "react"
import UserContext from "../Control/userContext"
import { useNavigate } from "react-router-dom"
import { auth, provider } from '../Firebase/firebase'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { useAuthState } from 'react-firebase-hooks/auth'
import { _UserManager } from "../Control/API"

export default function Auth() {
    const [User, setUser] = useContext(UserContext)
    const navigate = useNavigate()
    const auth = getAuth();

    const logIn = async (user) => {
        // Set User, then redirects
        let db_user = await _UserManager.getUser(user.uid) 
        console.log(db_user)
        if (db_user.length == 0) {
            console.log("a")
            navigate("/NewUser")}
        let copy = user
        copy.id = db_user[0].id
        copy.role = db_user[0].type
        setUser(copy)
        console.log(copy)
        if (copy.role == 'admin') navigate('/admin')
        if (copy.role == 'user') navigate('/user')

        
    }

    const signin = async () => {
        try {
            await signInWithPopup(auth, provider)
            .then((result) =>{
                const credential = GoogleAuthProvider.credentialFromResult(result)
                //const token = credential.accessToken
                const user = result.user
                logIn(user)
            })
            
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
                {/* <label htmlFor="">Usuario</label>
                <br />
                <input type="text" />
                <br />
                <label htmlFor="">Password</label>
                <br />
                <input type="password" name="" id="" />
                <br /> */}
                <button  onClick={signin}>Sign In with Google</button> 

            </div>
        </div>
    </div>
  )
}
