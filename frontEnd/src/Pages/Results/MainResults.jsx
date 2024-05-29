import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../../Control/userContext'
import { useParams } from 'react-router-dom'
import { _QuizManager } from '../../Control/API'

export default function MainResults() {
  // getQuizResults: (idUser, idQuiz) => {
  //   return API.call(`ObtenerResultados?idUser=${idUser}&idQuiz=${idQuiz}`, 'GET', {});
  // },
  // getQuiz: (quizID) => {
  //   return API.call(`getQuiz?quizID=${quizID}`, 'GET', {});
  // },

  const [User, setUser] = useContext(UserContext)
  const [quiz, setQuiz] = useState(null)
  const [results, setResults] = useState(null)
  const {id} = useParams()

  useEffect(() => {
    callResults()
  }, [])
  
  const callQuiz = async () =>{
    let a = await _QuizManager.getQuiz(id)
    setQuiz(a[0])
  }
  
  const callResults =  async () => {
    console.log(User.id, id)
    let a = await _QuizManager.getQuizResults( id)
    setResults(a)
    
  }
  return (
    <div>
      <h1>RESULTADOS</h1>

      <table>
        <thead>
          <th></th>
          <th>Nombre</th>
          <th>Nombre</th>
          <th>Puntos</th>
        </thead>
        <tbody>
          {results?.map((e,i)=>
            <tr key={i}>
              <td>{i+1}</td>
              <td> Pregunta: {e.pregunta} Confianza: {e.confianza} Resultado: {e.correcta}</td>
            </tr>
          )}
        </tbody>
      
      
      </table>
    </div>

  )
}
