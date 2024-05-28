/* eslint-disable no-unused-vars */

import { useContext, useState } from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import UserContext from './Control/userContext'
import Auth from './Pages/Aut/Auth'
import Home from './Pages/Home'
import NewUser from './Pages/Aut/NewUser'
import {Bounce, ToastContainer} from 'react-toastify'
import Chatbot from './Pages/chatbot'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './Firebase/firebase'


function App() {
  let [a] = useAuthState(auth)
  const [user, setUser] = useState(a)

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

            <Route path='/chatbot' element={<Chatbot/>} />
            <Route path='/newUser' element={<NewUser/>} />
            <Route path='/auth' element={<Auth></Auth>} />
            <Route path='/*' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  )
}

export default App
