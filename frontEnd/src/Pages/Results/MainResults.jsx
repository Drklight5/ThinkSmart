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


  const resultados  = [
    {
      nombre: 'Valeria', 
      preguntas: [
        {
          resultado: false,
          confianza: 2
        },
        {
          resultado: true,
          confianza:1
        },
        {
          resultado: true,
          confianza: 0
        }
      ]
    },
    {
      nombre: 'Kevin',
      preguntas: [
        {
          resultado: false,
          confianza: 2
        },
        {
          resultado: true,
          confianza: 1
        },
        {
          resultado: true,
          confianza: 0
        }
      ]
    },
    {
      nombre: 'Oscar',
      preguntas: [
        {
          resultado: false,
          confianza: 2
        },
        {
          resultado: true,
          confianza: 1
        },
        {
          resultado: true,
          confianza: 0
        }
      ]
    },
    {
      nombre: 'David',
      preguntas: [
        {
          resultado: true,
          confianza: 2
        },
        {
          resultado: true,
          confianza: 1
        },
        {
          resultado: true,
          confianza: 2
        }
      ]
    },
    {
      nombre: 'Diego',
      preguntas: [
        {
          resultado: true,
          confianza: 2
        },
        {
          resultado: true,
          confianza: 1
        },
        {
          resultado: true,
          confianza: 0
        }
      ]
    },
    {
      nombre: 'Bento',
      preguntas: [
        {
          resultado: false,
          confianza: 3
        },
        {
          resultado: true,
          confianza: 2
        },
        {
          resultado: true,
          confianza: 1
        }
      ]
    }
  ]
  

  useEffect(() => {
    //callResults()  // Calcular el puntaje para cada persona
    calcularPuntaje(resultados);
    // Ordenar los resultados por puntaje
    const resultadosOrdenados = ordenarPorPuntaje(resultados);
    setResults(resultadosOrdenados)


  }, [])
  
  // Función para calcular el puntaje total y agregarlo al objeto
  function calcularPuntaje(resultados) {
    resultados.forEach(persona => {
      let puntajeTotal = 0;
      persona.preguntas.forEach(pregunta => {
        if (pregunta.resultado === true) {
          puntajeTotal += pregunta.confianza;
        }
      });
      persona.puntaje = puntajeTotal;
    });
  }

  // Función para ordenar los objetos por puntaje de mayor a menor
  function ordenarPorPuntaje(resultados) {
    return resultados.sort((a, b) => b.puntaje - a.puntaje);
  }

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

      <table className='table-resultados'>
        <thead className='table-resultados-head'>
          <th></th>
          <th>Nombre</th>
          {  results != null?  results[0].preguntas.map((e,i) =>

            <th key={i}>{i+1} </th>

          ) : <></>
          
        }
          <th>Puntos finales</th>
        </thead>
        <tbody className='table-resultados-body'>
          {results?.map((e,i)=>
            <tr key={i}>
              <td className='position'>{i+1}</td>
              <td>{e.nombre}</td>
              { e.preguntas.map((f, j) =>

                <td key={j} className='points'> {f.resultado ? f.confianza : 0}</td>
              )} 

              <td className='points position'>{e.puntaje}</td>
            </tr>
          )}
        </tbody>
      
      
      </table>
    </div>

  )
}
