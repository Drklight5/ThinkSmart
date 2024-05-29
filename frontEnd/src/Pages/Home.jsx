/* eslint-disable no-unused-vars */

import { useContext, useEffect, useState } from "react";
import UserContext from "../Control/userContext";
import { Navigate, Routes, Route } from "react-router-dom";
import User from "./Us/User";
import Admin from "./Adm/Admin";
import MainResults from "./Results/MainResults"
import Fondo from "../Components/Fondo";
import ShowUser from "../Components/ShowUser";

function Home() {
	const [user, setUser] = useContext(UserContext);
	
	// Redirect if no user is logged in
	if (user?.uid == null || user.uid === undefined) return <Navigate to="/auth" />;
	if (user == null || user === undefined) return <Navigate to="/auth" />;

	const color = "app " + (user.role  == "user" ? "bg-info": "")

	// Check for user role and redirect accordingly
	return (
		<div className={color}>
			<Fondo></Fondo>
			<ShowUser></ShowUser>
			<div className="container">
				<Routes>
					<Route path="/user/*" element={<User />} when={user?.role === "user"} />
					<Route path="/admin/*" element={<Admin />} when={user?.role === "admin"} />
					<Route path="/results/:id" element={<MainResults/>} />
				</Routes>
			</div>
			
		</div >
	);
}

export default Home;
