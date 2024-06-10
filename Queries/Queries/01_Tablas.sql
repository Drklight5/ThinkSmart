use defaultdb;

CREATE TABLE user (
    idUser INT AUTO_INCREMENT PRIMARY KEY,
    idAut VARCHAR(255) NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    apellido VARCHAR(255) NOT NULL
);


CREATE TABLE admin (
    idAdmin INT AUTO_INCREMENT PRIMARY KEY,
    idAut VARCHAR(255) NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    apellido VARCHAR(255) NOT NULL
);

CREATE TABLE grupo (
    idGrupo INT AUTO_INCREMENT PRIMARY KEY,
    idAdmin INT,
    nombre VARCHAR(255) NOT NULL,
    FOREIGN KEY (idAdmin) REFERENCES admin (idAdmin)
);


CREATE TABLE userGrupo (
    idUserGrupo INT AUTO_INCREMENT PRIMARY KEY,
    idUser INT,
    idGrupo INT,
    FOREIGN KEY (idUser) REFERENCES user (idUser),
    FOREIGN KEY (idGrupo) REFERENCES grupo (idGrupo)
);


CREATE TABLE quiz (
    idQuiz INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255),
    descripcion TEXT,
    confianza TEXT
);

CREATE TABLE historial (
    idHistorial INT AUTO_INCREMENT PRIMARY KEY,
    idUser INT,
    idQuiz INT,
    fecha DATETIME,
    FOREIGN KEY (idUser) REFERENCES user (idUser),
	FOREIGN KEY (idQuiz) REFERENCES quiz (idQuiz)
);


CREATE TABLE pregunta (
    idPregunta INT AUTO_INCREMENT PRIMARY KEY,
    texto TEXT,
    correcta TEXT,
    opciones TEXT,
    idQuiz INT,
    FOREIGN KEY (idQuiz) REFERENCES quiz (idQuiz)
);



CREATE TABLE resultado (
    idResultado INT AUTO_INCREMENT PRIMARY KEY,
    idPregunta INT,
    confianza INT,
    correcta BOOL,
    idHistorial INT,
    FOREIGN KEY (idHistorial) REFERENCES historial (idHistorial),
    FOREIGN KEY (idPregunta) REFERENCES pregunta (idPregunta)
);


CREATE TABLE users_deleted (
    idUser INT PRIMARY KEY,
    nombre VARCHAR(255),
    apellido VARCHAR(255),
    deleted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE admins_deleted (
    idAdmin INT PRIMARY KEY,
    nombre VARCHAR(255),
    apellido VARCHAR(255),
    deleted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
