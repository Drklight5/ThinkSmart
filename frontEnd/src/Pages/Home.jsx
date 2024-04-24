/* eslint-disable no-unused-vars */

import { useContext, useEffect, useState } from "react"
import UserContext from "../Control/userContext"
import { Navigate } from "react-router-dom"

function Home() {
	const [User, setUser] = useContext(UserContext)

	// Redirect if no user is logged
	if (User == null || User == undefined) return <Navigate to="/auth" />
	
	if (Object.prototype.hasOwnProperty.call(User, "role")){
		if (User.role == "User") return <Navigate to="/user" />
		if (User.role == "Admin") return <Navigate to="/admin" />
	}
	
	return <Navigate to="/auth" />
}

export default Home
