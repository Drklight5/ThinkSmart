/* eslint-disable no-unused-vars */
import { useContext} from "react"
import UserContext from "../Control/userContext"
import "./ShowUser.css"

export default function ShowUser() {
    const [User, setUser] = useContext(UserContext)
  return (
    <div className="show-user">
        {console.log(User)}
        User
        <div className="user-icon">

        </div>
    </div>
  )
}
