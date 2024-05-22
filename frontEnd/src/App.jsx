/* eslint-disable no-unused-vars */

import { useContext, useState } from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import UserContext from './Control/userContext'
import Auth from './Pages/Auth'
import Home from './Pages/Home'
import User from './Pages/User'
import Admin from './Pages/Admin'
import Play from './Pages/Play'
import Create from './Pages/Create'
import Pruebas from './Pages/Pruebas'
import {Bounce, ToastContainer} from 'react-toastify'
import Chatbot from './Pages/chatbot'


function App() {
  const [user, setUser] = useState(null)
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        limit={2}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
/>
      <UserContext.Provider value={[user,setUser]}>
        <BrowserRouter>
          <Routes>

          ||<Route path='/chatbot' element={<Chatbot/>} />
            <Route path='/pruebas' element={<Pruebas/>} />
            <Route path='/auth' element={<Auth></Auth>} />
            <Route path='/*' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  )
}

export default App
