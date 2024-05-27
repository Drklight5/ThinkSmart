/* eslint-disable no-unused-vars */

import { useContext, useEffect, useState } from "react";
import UserContext from "../Control/userContext";
import { Navigate, Routes, Route } from "react-router-dom";
import User from "./User";
import Admin from "./Admin";
import Fondo from "../Components/Fondo";
import ShowUser from "../Components/ShowUser";

function Home() {
	const [user, setUser] = useContext(UserContext);
	console.log(user.uid)
	// Redirect if no user is logged in
	if (user == null || user === undefined) return <Navigate to="/auth" />;

	const color = "app " + (user.role  == "User" ? "bg-info": "")

	// Check for user role and redirect accordingly
	return (
		<div className={color}>
			<Fondo></Fondo>
			<ShowUser></ShowUser>
			<div className="container">
				<Routes>
					<Route path="/user/*" element={<User />} when={user?.role === "user"} />
					<Route path="/admin/*" element={<Admin />} when={user?.role === "admin"} />
				</Routes>
			</div>
			
		</div >
	);
}

export default Home;
