/* eslint-disable no-unused-vars */

import { useContext, useState } from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import './App.css'
import UserContext from './Control/userContext'
import Auth from './Pages/Auth'
import Layout from './Components/Layout'
import Home from './Pages/Home'
import User from './Pages/User'
import Admin from './Pages/Admin'


function App() {
  const [user, setUser] = useState(null)
  return (
    <>
      <UserContext.Provider value={[user,setUser]}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/auth' element={<Auth></Auth>}/>
            <Route path='/user' element={<User/>} />
            <Route path='/admin' element={<Admin/>}></Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  )
}

export default App
