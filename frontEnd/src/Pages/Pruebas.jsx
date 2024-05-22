import React, { useEffect, useState } from 'react'


export default function Pruebas() {
  const [Value, setValue] = useState("")
  const liga = "https://bf3b5167-ec87-4848-8e2a-a4d333ed937d-00-1k638g0zqcvv6.riker.replit.dev/"

  const User = {
    get: function (id){
      let link = liga + "user/" + id
      fetch(link)
      .then((response) => response.json())
      .then((response) => setValue(response))
    }

  }

  let idAdmin = "AvrLNetrVf1eMoAN3"
  let idUser = "BvrLNetrVf1eMosN3"
  let addUser = "CvrLNetrVf1eMosN3"
  let addAdmin = "DvrLNetrVf1eMosN3"

  return (
    <div style={{'display':'flex'}}>
      <div style={{'width':'50%'}}>
        <h1>Pruebas para las API</h1>
        <button onClick={()=>User.get(1)}>User Get</button>
      </div>
      
      <div style={{ 'width': '50%' }}>
        {JSON.stringify(Value)}
      </div>
    </div>
  )
}
