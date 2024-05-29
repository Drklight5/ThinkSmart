import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";

// Modal component
function Modal({ isOpen, onClose, content }) {
    if (!isOpen) return null;

    return (
        <div style={modalStyle}>
            <div style={modalContentStyle}>
                <span style={modalCloseStyle} onClick={onClose}>&times;</span>
                <div style={modalBodyStyle}>
                    <pre>{content}</pre>
                </div>
            </div>
        </div>
    );
}

// Main component
export default function ExplainAnswer({ pregunta }) {
    const clave = "AIzaSyA9u7fPHlhINLHhXX0VsWnTNiDN9tfgn6s";
    const genAI = new GoogleGenerativeAI(clave);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const [resultadoConsulta, setResultadoConsulta] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleConsulta = async () => {
        setLoading(true);
        const prompt = `Explica por qué la respuesta ${pregunta.selected} está mal para esta pregunta ${pregunta.texto} con las opciones ${pregunta.opciones}`;
        try {
            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = await response.text();
            setResultadoConsulta(text);
            setModalOpen(true);
        } catch (error) {
            setResultadoConsulta('Problemas en la consulta');
            setModalOpen(true);
        }
        setLoading(false);
    };

    return (
        <div style={{ maxWidth: '600px', padding: '30px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '1.5rem', marginBottom: '30px', textAlign: 'center' }}>Explicación de Respuesta</h1>
            <button
                type="button"
                id="botonConsulta"
                style={{ display: 'block', margin: '30px auto 0 auto', padding: '10px 20px', border: '1px solid #000', borderRadius: '5px', backgroundColor: '#000', color: '#fff', cursor: 'pointer' }}
                onClick={handleConsulta}
                disabled={loading}
            >
                {loading ? 'Consultando...' : 'Consultar'}
            </button>
            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} content={resultadoConsulta} />
        </div>
    );
}

// Styles for the modal
const modalStyle = {
    position: 'fixed',
    zIndex: '1',
    left: '0',
    top: '0',
    width: '100%',
    height: '100%',
    overflow: 'auto',
    backgroundColor: 'rgba(0,0,0,0.4)',
};

const modalContentStyle = {
    backgroundColor: '#fefefe',
    margin: '15% auto',
    padding: '20px',
    border: '1px solid #888',
    width: '80%',
    borderRadius: '10px',
};

const modalCloseStyle = {
    color: '#aaa',
    float: 'right',
    fontSize: '28px',
    fontWeight: 'bold',
};

const modalBodyStyle = {
    padding: '10px 0',
};
