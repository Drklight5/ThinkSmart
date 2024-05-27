import React, { useContext, useState } from 'react'
import UserContext from '../Control/userContext'
import { _UserManager } from '../Control/API'
import { useNavigate } from 'react-router-dom'

export default function NewUser() {
  const navigate = useNavigate()

  const [User, setUser] = useContext(UserContext)
  const [value, setValue] = useState({ nombre: '', apellido: '' })

  const handleInputChange = (e) => {
    setValue((prevData) => (
      { ...prevData, [e.target.name]: e.target.value}))
    console.log(e.target.value)
  }


  const onUser = async () => {
    let copy = value
    copy.idAut = User.uid
    let a = await _UserManager.createUser(copy)

    if (a.status == 'success') {
      let b = await _UserManager.getUser(User.uid)
      setUser((p) => {
        p.id = b[0].id
        p.type = b[0].type
        return p
      })
      navigate('/user')
    }
  }
  

  const onAdmin = async () => {
    let copy = value
    copy.idAut = User.uid
    let a = await _UserManager.createAdmin(copy) 

    if (a.status == 'success'){
      let b = await _UserManager.getUser(User.uid)
      setUser((p) =>{
        p.id = b[0].id 
        p.type = b[0].type
        return p
      })
      navigate('/admin')
    }
  }
  const a  = async() => {
    let b = await _UserManager.getUser("idAut1Admin")
    console.log(b)
  }

  return (
    <div>
      <h1>Bienvenido</h1>
      {/* <button onClick={a}>Pruebas</button> */}

      <label> Nombre:</label>
      <input 
        name= 'nombre'
        value = {value.nombre}
        onChange={(e) => handleInputChange(e)}

      />
      <label> Apellido:</label>
      <input
        name='apellido'
        value = {value.apellido}
        onChange={(e) => handleInputChange(e)}
      />
      <button onClick={onAdmin}>Ser Admin</button>
      <button onClick={onUser}>Ser User</button>
    </div>
  )
}
