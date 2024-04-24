/* eslint-disable no-unused-vars */

import { useContext, useEffect, useState } from "react"
import UserContext from "../Control/userContext"
import { Navigate } from "react-router-dom"

function Home() {
	const [User, setUser] = useContext(UserContext)

	if (User == null) {
		return <Navigate to="/auth" />
	}
	return (
		<div>
			<h1>{User.username}</h1>
		</div>
	)
}

export default Home
