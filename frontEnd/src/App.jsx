/* eslint-disable no-unused-vars */

import { useContext, useState } from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import UserContext from './Control/userContext'
import Auth from './Pages/Auth'
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
            <Route path='/auth' element={<Auth></Auth>} />
            <Route path='/*' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  )
}

export default App
