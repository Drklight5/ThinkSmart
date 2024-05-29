import { useContext, useState } from "react";
import NewQuestion from "../../Components/Admin/NewQuestion";
import QuizContext from "../../Control/quizContext";
import { createQuestion, createQuiz } from "../../Models/Quiz";
import { _QuizManager } from "../../Control/API";
import UserContext from "../../Control/userContext";


export default function Create() {
  const [quiz, setQuiz] = useState(createQuiz)
  const [User, setUser] = useContext(UserContext); // Suponiendo que el UserContext está configurado correctamente
  const [quizName, setQuizName] = useState('');
  const [quizDescription, setQuizDescription] = useState('');
  const [confidenceLevels, setConfidenceLevels] = useState(['']);

  const handleInputChange = (e) => setQuiz((p) => ({ ...p, [e.target.name]: e.target.value }))

  const handleCreateQuiz = async () => {
    try {
      await _QuizManager.createQuiz(quizName,quizDescription,JSON.stringify(confidenceLevels))
      setSuccessMessage('Quiz creado exitosamente');
      setQuizName('');
      setQuizDescription('');
    } catch (error) {

    }
  };

  const handleConfidenceChange = (index, value) => {
    const newConfidenceLevels = [...confidenceLevels];
    newConfidenceLevels[index] = value;
    setConfidenceLevels(newConfidenceLevels);
  };

  const addConfidenceLevel = () => {
    setConfidenceLevels([...confidenceLevels, '']);
  };

  const removeConfidenceLevel = (index) => {
    const newConfidenceLevels = confidenceLevels.filter((_, i) => i !== index);
    setConfidenceLevels(newConfidenceLevels);
  };

  return (
    <div style={{ color: 'black' }}>
      <QuizContext.Provider value={[quiz, setQuiz]}>
        <h1 className="materia">
          <input
            type="text"
            name="name"
            value={quizName}
            onChange={(e) => setQuizName(e.target.value)}
            placeholder="Nombre del Quiz"
          />


        </h1>
        <div className="p-3">
          <label htmlFor="topic">Tema</label>
          <input
            className="topic-input"
            type="text"
            value={quizDescription}
            onChange={(e) => setQuizDescription(e.target.value)}
            placeholder="Tema del quiz"
          />
        </div>

        <div>
          <label>Niveles de Confianza:</label>
          {confidenceLevels.map((level, index) => (
            <div key={index}>
              <input
                type="text"
                value={level}
                onChange={(e) => handleConfidenceChange(index, e.target.value)}
              />
              <button type="button" onClick={() => removeConfidenceLevel(index)}>
                Eliminar
              </button>
            </div>
          ))}
          <button type="button" onClick={addConfidenceLevel}>
            Agregar Nivel de Confianza 
          </button>
        </div>
        <div>
          <button onClick={handleCreateQuiz}>Crear Quiz</button>
        </div>


      </QuizContext.Provider>
    </div>
  )
}