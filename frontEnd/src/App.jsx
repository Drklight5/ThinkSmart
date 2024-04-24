/* eslint-disable no-unused-vars */

import { useContext, useState } from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import './App.css'
import UserContext from './Control/userContext'
import Auth from './Pages/Auth'
import Layout from './Components/Layout'
import Home from './Pages/Home'


function App() {
  const [User, setUser] = useState(null)
  return (
    <>
      <UserContext.Provider value={[User,setUser]}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/auth' element={<Auth></Auth>}/>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  )
}

export default App
