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
	useEffect(() => {
		fetch("https://2c23272e-d0ae-42e6-b380-ada411b0bfac-00-33bq6fdrpbiu1.kirk.replit.dev/")
	
	}, [])
	
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
