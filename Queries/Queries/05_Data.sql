use defaultdb;

-- Crear Users
INSERT INTO user (idAut, nombre, apellido) VALUES ('idAut1','Usuario 1','Apellido');
INSERT INTO user (idAut, nombre, apellido) VALUES ('idAut2','Usuario 2','Apellido');
INSERT INTO user (idAut, nombre, apellido) VALUES ('idAut3','Usuario 3','Apellido');
INSERT INTO user (idAut, nombre, apellido) VALUES ('idAut4','Usuario 4','Apellido');
INSERT INTO user (idAut, nombre, apellido) VALUES ('idAut5','Usuario 5','Apellido');
INSERT INTO user (idAut, nombre, apellido) VALUES ('idAut6','Usuario 6','Apellido');
INSERT INTO user (idAut, nombre, apellido) VALUES ('idAut7','Usuario 7','Apellido');
INSERT INTO user (idAut, nombre, apellido) VALUES ('idAut8','Usuario 8','Apellido');
INSERT INTO user (idAut, nombre, apellido) VALUES ('idAut9','Usuario 9','Apellido');
INSERT INTO user (idAut, nombre, apellido) VALUES ('idAut10','Usuario 10','Apellido');


-- Crear Admin
INSERT INTO admin (idAut, nombre, apellido) VALUES ('idAut1Admin','Primer Admin','Apellido');
INSERT INTO admin (idAut, nombre, apellido) VALUES ('idAut2Admin','Segundo Admin','Apellido');
INSERT INTO admin (idAut, nombre, apellido) VALUES ('idAut3Admin','Tercer Admin','Apellido');

-- Crear Grupos
INSERT INTO grupo (idAdmin,nombre) VALUES (1,'Grupo1');
INSERT INTO grupo (idAdmin,nombre) VALUES (2,'Grupo2');
INSERT INTO grupo (idAdmin,nombre) VALUES (3,'Grupo3');

-- Asignar usuarios a grupos
INSERT INTO userGrupo (idUser,idGrupo) VALUES (1,1);
INSERT INTO userGrupo (idUser,idGrupo) VALUES (2,1);
INSERT INTO userGrupo (idUser,idGrupo) VALUES (3,1);
INSERT INTO userGrupo (idUser,idGrupo) VALUES (4,2);
INSERT INTO userGrupo (idUser,idGrupo) VALUES (5,2);
INSERT INTO userGrupo (idUser,idGrupo) VALUES (6,2);
INSERT INTO userGrupo (idUser,idGrupo) VALUES (7,3);
INSERT INTO userGrupo (idUser,idGrupo) VALUES (8,3);
INSERT INTO userGrupo (idUser,idGrupo) VALUES (9,3);
INSERT INTO userGrupo (idUser,idGrupo) VALUES (10,1);
INSERT INTO userGrupo (idUser,idGrupo) VALUES (10,2);
INSERT INTO userGrupo (idUser,idGrupo) VALUES (10,3);


-- Crear Quizzes
INSERT INTO quiz (nombre, descripcion, confianza) 
VALUES ('Quiz1', 'Descripción del quiz', '["alta", "media", "baja"]');
INSERT INTO quiz (nombre, descripcion, confianza) 
VALUES ('Quiz2', 'Descripción del quiz', '["alta", "media", "baja"]');


-- Crear Preguntas
INSERT INTO pregunta (texto, correcta, opciones, idQuiz) 
VALUES 
    ('¿Cuál es la capital de Francia?', 'París', '["París", "Madrid", "Berlín", "Londres"]', 1),
    ('¿Quién escribió "Don Quijote de la Mancha"?', 'Miguel de Cervantes', '["Miguel de Cervantes", "Gabriel García Márquez", "William Shakespeare", "Federico García Lorca"]', 1),
    ('¿Cuál es el río más largo del mundo?', 'Amazonas', '["Amazonas", "Nilo", "Yangtsé", "Misisipi"]', 1),
    ('¿En qué año comenzó la Segunda Guerra Mundial?', '1939', '["1939", "1941", "1945", "1914"]', 1),
    ('¿Cuál es el elemento químico más abundante en la corteza terrestre?', 'Oxígeno', '["Oxígeno", "Carbono", "Hierro", "Silicio"]', 1),
    ('¿Quién pintó la Mona Lisa?', 'Leonardo da Vinci', '["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Michelangelo"]', 1),
    ('¿Cuál es el símbolo químico del oro?', 'Au', '["Au", "Ag", "Fe", "Cu"]', 1),
    ('¿Cuál es la capital de Japón?', 'Tokio', '["Tokio", "Pekín", "Seúl", "Bangkok"]', 1),
    ('¿Cuál es el animal más grande del mundo?', 'La ballena azul', '["La ballena azul", "Elefante africano", "Dinosaurio", "Tiburón ballena"]', 1),
    ('¿Quién escribió "Hamlet"?', 'William Shakespeare', '["William Shakespeare", "Homer", "Dante Alighieri", "Virginia Woolf"]', 1),
    ('¿Cuál es la montaña más alta del mundo?', 'Monte Everest', '["Monte Everest", "Monte Kilimanjaro", "Monte Aconcagua", "Mont Blanc"]', 1),
    ('¿En qué país se encuentra la Gran Muralla China?', 'China', '["China", "Japón", "Corea del Norte", "India"]', 1),
    ('¿Cuál es el presidente actual de Estados Unidos?', 'Joe Biden', '["Joe Biden", "Donald Trump", "Barack Obama", "George W. Bush"]', 1),
    ('¿Cuál es el nombre del satélite natural de la Tierra?', 'Luna', '["Luna", "Marte", "Júpiter", "Saturno"]', 1),
    ('¿Cuál es el océano más grande del mundo?', 'Océano Pacífico', '["Océano Pacífico", "Océano Atlántico", "Océano Índico", "Océano Ártico"]', 1),
    ('¿Cuál es la moneda oficial de Australia?', 'Dólar australiano', '["Dólar australiano", "Dólar estadounidense", "Euro", "Libra esterlina"]', 1),
    ('¿En qué año llegó el hombre a la luna por primera vez?', '1969', '["1969", "1972", "1957", "1983"]', 1),
    ('¿Cuál es el planeta más grande del sistema solar?', 'Júpiter', '["Júpiter", "Saturno", "Urano", "Neptuno"]', 1),
    ('¿Cuál es la capital de España?', 'Madrid', '["Madrid", "Barcelona", "Valencia", "Sevilla"]', 1),
    ('¿Quién fue el primer presidente de Estados Unidos?', 'George Washington', '["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"]', 1),
    ('¿Cuál es la capital de Francia?', 'París', '["París", "Madrid", "Berlín", "Londres"]', 2),
    ('¿Quién escribió "Don Quijote de la Mancha"?', 'Miguel de Cervantes', '["Miguel de Cervantes", "Gabriel García Márquez", "William Shakespeare", "Federico García Lorca"]', 2),
    ('¿Cuál es el río más largo del mundo?', 'Amazonas', '["Amazonas", "Nilo", "Yangtsé", "Misisipi"]', 2),
    ('¿En qué año comenzó la Segunda Guerra Mundial?', '1939', '["1939", "1941", "1945", "1914"]', 2),
    ('¿Cuál es el elemento químico más abundante en la corteza terrestre?', 'Oxígeno', '["Oxígeno", "Carbono", "Hierro", "Silicio"]', 2),
    ('¿Quién pintó la Mona Lisa?', 'Leonardo da Vinci', '["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Michelangelo"]', 2),
    ('¿Cuál es el símbolo químico del oro?', 'Au', '["Au", "Ag", "Fe", "Cu"]', 2),
    ('¿Cuál es la capital de Japón?', 'Tokio', '["Tokio", "Pekín", "Seúl", "Bangkok"]', 2),
    ('¿Cuál es el animal más grande del mundo?', 'La ballena azul', '["La ballena azul", "Elefante africano", "Dinosaurio", "Tiburón ballena"]', 2),
    ('¿Quién escribió "Hamlet"?', 'William Shakespeare', '["William Shakespeare", "Homer", "Dante Alighieri", "Virginia Woolf"]', 2),
    ('¿Cuál es la montaña más alta del mundo?', 'Monte Everest', '["Monte Everest", "Monte Kilimanjaro", "Monte Aconcagua", "Mont Blanc"]', 2),
    ('¿En qué país se encuentra la Gran Muralla China?', 'China', '["China", "Japón", "Corea del Norte", "India"]', 2),
    ('¿Cuál es el presidente actual de Estados Unidos?', 'Joe Biden', '["Joe Biden", "Donald Trump", "Barack Obama", "George W. Bush"]', 2),
    ('¿Cuál es el nombre del satélite natural de la Tierra?', 'Luna', '["Luna", "Marte", "Júpiter", "Saturno"]', 2),
    ('¿Cuál es el océano más grande del mundo?', 'Océano Pacífico', '["Océano Pacífico", "Océano Atlántico", "Océano Índico", "Océano Ártico"]', 2),
    ('¿Cuál es la moneda oficial de Australia?', 'Dólar australiano', '["Dólar australiano", "Dólar estadounidense", "Euro", "Libra esterlina"]', 2),
    ('¿En qué año llegó el hombre a la luna por primera vez?', '1969', '["1969", "1972", "1957", "1983"]', 2),
    ('¿Cuál es el planeta más grande del sistema solar?', 'Júpiter', '["Júpiter", "Saturno", "Urano", "Neptuno"]', 2),
    ('¿Cuál es la capital de España?', 'Madrid', '["Madrid", "Barcelona", "Valencia", "Sevilla"]', 2),
    ('¿Quién fue el primer presidente de Estados Unidos?', 'George Washington', '["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"]', 2);


-- Historial
INSERT INTO historial (idUser, idQuiz, fecha) VALUES (1, 1, NOW());
INSERT INTO historial (idUser, idQuiz, fecha) VALUES (2, 2, NOW());

-- responder preguntas
INSERT INTO resultado (idPregunta, confianza, correcta, idHistorial) VALUES (1, 1, true,1);
INSERT INTO resultado (idPregunta, confianza, correcta, idHistorial) VALUES (2, 2, true,1);
INSERT INTO resultado (idPregunta, confianza, correcta, idHistorial) VALUES (3, 3, false,1);
INSERT INTO resultado (idPregunta, confianza, correcta, idHistorial) VALUES (4, 1, true,1);
INSERT INTO resultado (idPregunta, confianza, correcta, idHistorial) VALUES (5, 2, true,1);
INSERT INTO resultado (idPregunta, confianza, correcta, idHistorial) VALUES (6, 3, false,1);
INSERT INTO resultado (idPregunta, confianza, correcta, idHistorial) VALUES (7, 1, true,1);
INSERT INTO resultado (idPregunta, confianza, correcta, idHistorial) VALUES (8, 2, false,1);
INSERT INTO resultado (idPregunta, confianza, correcta, idHistorial) VALUES (9, 3, false,1);
INSERT INTO resultado (idPregunta, confianza, correcta, idHistorial) VALUES (10, 1, true,1);







