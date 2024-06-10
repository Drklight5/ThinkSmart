use defaultdb;

--  //1 Trae todos los grupos, del usuario
-- GetUserGroup: Returns group information for a specific user
DELIMITER //

CREATE PROCEDURE getUserGroup(IN uid INT)
BEGIN
    SELECT g.idGrupo, g.nombre, a.nombre AS admin_nombre, a.apellido AS admin_apellido
    FROM grupo g
    INNER JOIN userGrupo ug ON g.idGrupo = ug.idGrupo
    INNER JOIN admin a ON g.idAdmin = a.idAdmin
    WHERE ug.idUser = uid;
END //
DELIMITER ;



-- //2 Crea un grupo nuevo role: admin 
-- CreateGroup: Adds a admin to groups
DELIMITER //
CREATE PROCEDURE createGroup(IN p_idAdmin INT, IN p_nombreGrupo VARCHAR(255))
BEGIN
    INSERT INTO grupo (idAdmin, nombre)
    VALUES (p_idAdmin, p_nombreGrupo);
END //
DELIMITER ;


-- //3 Regresa la lista de alumnos de un grupo 
DELIMITER //

CREATE PROCEDURE ObtenerAlumnosPorGrupo(
    IN grupoID INT
)
BEGIN
    SELECT u.idUser, u.idAut, u.nombre, u.apellido
    FROM user u
    JOIN userGrupo ug ON u.idUser = ug.idUser
    WHERE ug.idGrupo = grupoID;
END //

DELIMITER ;


--    //4 Une al usuario a un grupo role:user
-- CreateGroup: Adds a user and group to userGrupo
DELIMITER //
CREATE PROCEDURE joinGroup(IN p_idUser INT, IN p_idGrupo INT)
BEGIN
    INSERT INTO userGrupo (idUser, idGrupo)
    VALUES (p_idUser, p_idGrupo);
END //

DELIMITER ;


--  //5 Elimina un grupo 

-- DeleteGroup: Deletes a group by its ID
DELIMITER //
CREATE PROCEDURE deleteGroup(IN groupID INT)
BEGIN
    DELETE FROM grupo WHERE idGrupo = groupID;
END //
DELIMITER ;

-- //6 Regresa la lista de quizzes relacionados al usuario
DELIMITER //

CREATE PROCEDURE ObtenerQuizzesPorUsuario(
    IN userID INT
)
BEGIN
    SELECT q.idQuiz, q.nombre, q.descripcion
    FROM quiz q
    JOIN historial h ON q.idQuiz = h.idQuiz
    WHERE h.idUser = userID
    GROUP BY q.idQuiz;
END //

DELIMITER ;


-- //7 Crea un nuevo quiz 
DELIMITER //
CREATE PROCEDURE CrearNuevoQuiz(
    IN quizNombre VARCHAR(255),
    IN quizDescripcion TEXT,
    IN quizConfianza TEXT
)
BEGIN
    INSERT INTO quiz (nombre, descripcion, confianza)
    VALUES (quizNombre, quizDescripcion, quizConfianza);
END //
DELIMITER ;


--    //8 modifica la informacion de un quiz
-- ModifyQuiz: Modifies quiz details
DELIMITER //

CREATE PROCEDURE modifyQuiz(IN quizID INT, IN quizNombre VARCHAR(255), IN quizDescripcion TEXT, IN quizConfianza TEXT)
BEGIN
    UPDATE quiz
    SET nombre = quizNombre, descripcion = quizDescripcion, confianza = quizConfianza
    WHERE idQuiz = quizID;
END //

DELIMITER ;


--    //9 Elimina un quiz
-- DeleteQuiz: Deletes a quiz by its ID
DELIMITER //

CREATE PROCEDURE deleteQuiz(IN quizID INT)
BEGIN
    DELETE FROM quiz
    WHERE idQuiz = quizID;
END //

DELIMITER ;


--     //10 Devuelve la informacion del quiz mas todas las preguntas del quiz
-- GetQuiz: Retrieves quiz details by its ID
DELIMITER //
CREATE PROCEDURE getQuiz(IN quizID INT)
BEGIN
    SELECT idQuiz, nombre, descripcion, confianza
    FROM quiz
    WHERE idQuiz = quizID;
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE ObtenerPreguntasPorQuiz(
    IN quizID INT
)
BEGIN
    SELECT p.idPregunta, p.texto, p.correcta, p.opciones
    FROM pregunta p
    WHERE p.idQuiz = quizID;
END //

DELIMITER ;


 --   //11 Agrega una pregunta al quizR
-- AddQuestion: Adds a question to a quiz
DELIMITER //

CREATE PROCEDURE addQuestion(IN quizID INT, IN questionTexto TEXT, IN questionCorrecta TEXT, IN questionOpciones TEXT)
BEGIN
    INSERT INTO pregunta (texto, correcta, opciones, idQuiz)
    VALUES (questionTexto, questionCorrecta, questionOpciones, quizID);
END //

DELIMITER ;



--     //12 El usuario responde una pregunta 
-- AnswerQuestion: Records the response of a user to a question
DELIMITER //
CREATE PROCEDURE answerQuestion(IN uid INT, IN idQuestion INT, IN response BOOL, IN responseConfianza INT, IN idHistorial INT)
BEGIN
    INSERT INTO resultado (idPregunta, correcta, confianza, idHistorial)
    VALUES (idQuestion, response, responseConfianza, idHistorial);
END //
DELIMITER ;



-- //13 Trae todos los resultados generados por ese quiz
DELIMITER $$
CREATE PROCEDURE ObtenerResultados(
    IN p_idQuiz INT
)
BEGIN
SELECT 
        p.texto AS pregunta,
        r.confianza,
        r.correcta,
        r.idPregunta, 
			h.idUser, 
			h.idQuiz
    FROM 
        quiz q
    JOIN 
        historial h ON q.idQuiz = h.idQuiz
    JOIN 
        resultado r ON h.idHistorial = r.idHistorial
    JOIN 
        pregunta p ON r.idPregunta = p.idPregunta
   	WHERE h.idQuiz = p_idQuiz;
END$$
DELIMITER ;


-- //14 te da el ID user dado el id aut
DELIMITER //

CREATE PROCEDURE GetUserIdByIdAut (
    IN p_idAut VARCHAR(255)
)
BEGIN
    DECLARE v_idUser INT DEFAULT -1;

    SELECT idUser INTO v_idUser
    FROM user
    WHERE idAut = p_idAut;

    SELECT IFNULL(v_idUser, -1) AS idUser;
END //



-- //15 te da el ID admin dado el id aut
DELIMITER //

CREATE PROCEDURE GetAdminIdByIdAut (
    IN p_idAut VARCHAR(255)
)
BEGIN
    DECLARE v_idAdmin INT DEFAULT -1;

    SELECT idAdmin INTO v_idAdmin
    FROM admin
    WHERE idAut = p_idAut;

    SELECT IFNULL(v_idAdmin, -1) AS idAdmin;
END //

DELIMITER ;
-- // 16 Añadir a un usuario
DELIMITER //

CREATE PROCEDURE addUser(
    IN p_idAut VARCHAR(255),
    IN p_nombre VARCHAR(255),
    IN p_apellido VARCHAR(255)
)
BEGIN
    DECLARE existe INT;
    
    -- Verificar si ya existe un registro con el mismo idAut
    SELECT COUNT(*) INTO existe FROM user WHERE idAut = p_idAut;
    
    -- Si no existe, entonces insertar
    IF existe = 0 THEN
        INSERT INTO user (idAut, nombre, apellido)
        VALUES (p_idAut, p_nombre, p_apellido);
    END IF;
END //

DELIMITER ;




-- // 17 Añadir un admin
DELIMITER //

CREATE PROCEDURE addAdmin(
    IN p_idAut VARCHAR(255),
    IN p_nombre VARCHAR(255),
    IN p_apellido VARCHAR(255)
)
BEGIN
    DECLARE existe INT;
    
    -- Verificar si ya existe un registro con el mismo idAut
    SELECT COUNT(*) INTO existe FROM admin WHERE idAut = p_idAut;
    
    -- Si no existe, entonces insertar
    IF existe = 0 THEN
        INSERT INTO admin (idAut, nombre, apellido)
        VALUES (p_idAut, p_nombre, p_apellido);
    END IF;
END //

DELIMITER ;


-- // 18 get User Or Admin by idAut

DELIMITER //

CREATE PROCEDURE getUserOrAdmin(IN p_idAut VARCHAR(255))
BEGIN
    SELECT idUser AS id, 'user' AS type
    FROM user
    WHERE idAut = p_idAut
    UNION
    SELECT idAdmin AS id, 'admin' AS type
    FROM admin
    WHERE idAut = p_idAut;
END //

DELIMITER ;



-- // 19 Obtener los quizes
DELIMITER //

CREATE PROCEDURE GetAllQuizzes()
BEGIN
    SELECT idQuiz, nombre, descripcion, confianza
    FROM quiz;
END //

DELIMITER ;



-- // 20 obtiene 10 preguntas aleatorias de un quiz
DELIMITER //

CREATE PROCEDURE GetRandomPreguntas(IN p_idQuiz INT)
BEGIN
    SELECT idPregunta, texto, correcta, opciones, idQuiz
    FROM pregunta
    WHERE idQuiz = p_idQuiz
    ORDER BY RAND()
    LIMIT 10;
END //



DELIMITER ;

drop procedure GetRandomPreguntas;

-- //21 el usuario inicia un quiz
DELIMITER //

CREATE PROCEDURE AddHistorialEntry(IN p_idUser INT, IN p_idQuiz INT)
BEGIN
    INSERT INTO historial (idUser, idQuiz, fecha)
    VALUES (p_idUser, p_idQuiz, NOW());
    
    select * from historial where idUser = p_idUser order by fecha limit 1 ;
END //

DELIMITER ;

drop procedure AddHistorialEntry;
call AddHistorialEntry(12,1);

select * from historial;
-- // 22 Modifica una pregunta
DELIMITER //

CREATE PROCEDURE modificarPregunta(
    IN p_idPregunta INT,
    IN p_texto TEXT,
    IN p_correcta TEXT,
    IN p_opciones TEXT
)
BEGIN
    UPDATE pregunta
    SET texto = p_texto,
        correcta = p_correcta,
        opciones = p_opciones
    WHERE idPregunta = p_idPregunta;
END //

DELIMITER ;

-- GetQuizResults: Retrieves results for a quiz
DELIMITER //
CREATE PROCEDURE getQuizResults(IN idQuiz INT)
BEGIN
    SELECT r.idResultado, r.idPregunta, r.confianza, r.correcta, r.idHistorial, p.texto AS preguntaTexto
    FROM resultado r
    INNER JOIN pregunta p ON r.idPregunta = p.idPregunta
    INNER JOIN historial h ON r.idHistorial = h.idHistorial
    WHERE p.idQuiz = idQuiz;
END //
DELIMITER ;









-- GetGroups: Returns groups associated with a user

DELIMITER //
CREATE PROCEDURE getRanking(IN p_idUser INT)
BEGIN
    SELECT g.idGrupo, g.nombre AS nombreGrupo
    FROM user u
    JOIN userGrupo ug ON u.idUser = ug.idUser
    JOIN grupo g ON ug.idGrupo = g.idGrupo
    WHERE u.idUser = p_idUser;
END //
DELIMITER ;


-- asdfgdbfdafdbffddbffdbfas
DELIMITER //

CREATE PROCEDURE getRanking(IN p_idQuiz INT)
BEGIN
    SELECT 
        u.idUser,
        CONCAT(u.nombre, ' ', u.apellido) AS nombreUsuario,
        q.idQuiz,
        p.idPregunta,
        r.confianza,
        r.correcta
    FROM
        user u
        INNER JOIN historial h ON u.idUser = h.idUser
        INNER JOIN resultado r ON h.idHistorial = r.idHistorial
        INNER JOIN pregunta p ON r.idPregunta = p.idPregunta
        INNER JOIN quiz q ON p.idQuiz = q.idQuiz
    WHERE
        q.idQuiz = p_idQuiz
        AND r.idResultado IN (
            SELECT MAX(r2.idResultado)
            FROM resultado r2
            INNER JOIN historial h2 ON r2.idHistorial = h2.idHistorial
            WHERE h2.idUser = h.idUser AND r2.idPregunta = p.idPregunta
            GROUP BY r2.idPregunta, h2.idUser
        )
    ORDER BY u.idUser, p.idPregunta;
END //

DELIMITER ;


