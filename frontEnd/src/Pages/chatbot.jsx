import React, { useState} from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function Chatbot() {
  const clave = "AIzaSyA9u7fPHlhINLHhXX0VsWnTNiDN9tfgn6s";
  const genAI = new GoogleGenerativeAI(clave);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const [consulta, setConsulta] = useState('');
  const [resultadoConsulta, setResultadoConsulta] = useState('');
  const [botonConsulta, setBotonConsulta] = useState(false);

  const handleConsulta = async () => {
    setBotonConsulta(true);
    try {
      const result = await model.generateContent(consulta);
      const response = await result.response;
      const text = response.text();
      setResultadoConsulta(text);
    } catch (error) {
      setResultadoConsulta('Problemas en la consulta');
    }
    setBotonConsulta(false);
  };

  return (
    <div style={{ maxWidth: '600px', padding: '30px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '1.5rem', marginBottom: '30px', textAlign: 'center' }}>Formulario de Consulta a GEMINI</h1>
      <div>
        <textarea 
          id="consulta" 
          style={{ width: '100%', height: '200px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
          value={consulta}
          onChange={e => setConsulta(e.target.value)}
        />
      </div>
      <button 
        type="button" 
        id="botonConsulta" 
        style={{ display: 'block', margin: '30px auto 0 auto', padding: '10px 20px', border: '1px solid #000', borderRadius: '5px', backgroundColor: '#000', color: '#fff', cursor: 'pointer' }}
        onClick={handleConsulta}
        disabled={botonConsulta}
      >
        {botonConsulta ? 'Consultando...' : 'Consultar'}
      </button>
      <pre id="resultadoConsulta" style={{ backgroundColor: '#465ca7', padding: '10px', marginTop: '30px', fontFamily: 'monospace' }}>
        {resultadoConsulta}
      </pre>
    </div>
  );
}