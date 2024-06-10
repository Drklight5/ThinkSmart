use defaultdb;


CREATE VIEW respuestas_view AS
SELECT 
    q.nombre AS nombre_quiz,
    p.texto AS pregunta,
    r.correcta AS respuesta,
    r.confianza AS nivel_confianza,
    h.fecha AS fecha_respuesta,
    u.nombre AS nombre_usuario,
    u.apellido AS apellido_usuario
FROM 
    resultado r
JOIN 
    pregunta p ON r.idPregunta = p.idPregunta
JOIN 
    historial h ON r.idHistorial = h.idHistorial
JOIN 
    quiz q ON p.idQuiz = q.idQuiz
JOIN 
    user u ON h.idUser = u.idUser;
    
    select * from respuestas_view;
