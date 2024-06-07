import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../../Control/userContext';
import { useParams } from 'react-router-dom';
import { _QuizManager } from '../../Control/API';

export default function MainResults() {
  const [User, setUser] = useContext(UserContext);
  const [quiz, setQuiz] = useState(null);
  const [results, setResults] = useState(null);
  const { id } = useParams();

  const resultados = [
    // Tus datos de resultados aquí...
  ];

  useEffect(() => {
    callResults(); // Llama a la función al montar el componente
    const interval = setInterval(callResults, 5000); // Llama a la función cada 5 segundos
    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

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
    return resultados
  }

  // Función para ordenar los objetos por puntaje de mayor a menor
  function ordenarPorPuntaje(resultados) {
    return resultados.sort((a, b) => b.puntaje - a.puntaje);
  }


  function transformData(data) {
    const result = [];

    data.forEach(item => {
      let user = result.find(u => u.nombre === item.nombreUsuario);

      if (!user) {
        user = {
          nombre: item.nombreUsuario,
          preguntas: []
        };
        result.push(user);
      }

      user.preguntas.push({
        resultado: !!item.correcta, // convierte 1 a true y 0 a false
        confianza: item.confianza
      });
    });

    return result;
  }

  const callResults = async () => {
    console.log(id);
    let a = await _QuizManager.getQuizResults(id);
    let b = transformData(a)
    let c = calcularPuntaje(b)

    const resultadosOrdenados = ordenarPorPuntaje(c);

    setResults(resultadosOrdenados);
  };

  return (
    <div>
      <h1>RESULTADOS</h1>
      <table className='table-resultados'>
        <thead className='table-resultados-head'>
          <tr>
            <th></th>
            <th>Nombre</th>
            {results != null ? results[0].preguntas.map((e, i) => <th key={i}>{i + 1} </th>) : <></>}
            <th>Puntos finales</th>
          </tr>
        </thead>
        <tbody className='table-resultados-body'>
          {results?.map((e, i) => (
            <tr key={i}>
              <td className='position'>{i + 1}</td>
              <td>{e.nombre}</td>
              {e.preguntas.map((f, j) => <td key={j} className='points'> {f.resultado ? f.confianza : 0}</td>)}
              <td className='points position'>{e.puntaje}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
