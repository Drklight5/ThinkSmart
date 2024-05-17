import { useState } from "react"

export default function Grupo() {

    const [Codigo, setCodigo] = useState("")
    const nuevoGrupo = () => {

    }
  return (
    <div>
        <h1 className="t-white">GRUPOS</h1>
        <div className="my-5">
            Lista de grupos 
            <div>
                <h2>Entrar a nuevo grupo</h2>
                <input type="text" placeholder="CODIGO"/>
                <button className="btn bg-secondary " onClick={nuevoGrupo}>Agregar</button>

            </div>
        </div>
    </div>
  )
}
