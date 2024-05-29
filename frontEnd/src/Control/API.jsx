
import { Bounce, Zoom, toast } from "react-toastify"

function goodAlert(message) {
    if (message == "") return
    toast.success(text, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });
    toast.clearWaitingQueue();
}

function badAlert(message) {
    if (message == "") return
    toast.error(message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });
    toast.clearWaitingQueue();
}
const API = {
    
    URL: "https://659cf414-2cad-4109-89f5-18ae24f32282-00-19i33a0xukp75.kirk.replit.dev/",
    init: function () {

    },
    call: async function (_url, _method, _data, message = "") {
        let content = {method: _method}
        if (_method != 'GET') {
            content.body = JSON.stringify(_data)
            content.headers = {
                'Content-Type': 'application/json'
            }
        }
        return await fetch(this.URL + _url, content)
        .then((resp) => {
            // ERRORES
            if (resp.status == 401) badAlert("Paso algo mal, inténtalo luego")
            if (resp.status == 403) badAlert("Paso algo mal, inténtalo luego")
            if (resp.status == 400) badAlert("Paso algo mal, inténtalo luego")
            if (resp.status == 500) badAlert("Paso algo mal, inténtalo luego")
            if (resp.status >= 400) return null

            // GOOD RESPONSE
            goodAlert(message)
            return resp.json()

        }).catch((e) => {
            console.log(e)
            // NO INTERNET
            //badAlert("No hay conexión , verifica tu red")
            return null
        })


    }
}

export const _UserManager = {
    getUser: (uid) => {
        return API.call(`getUserOrAdmin?id=${uid}`, 'GET', {});
    },

    createUser: (idAut, nombre, apellido) => {
        const value = {
            idAut: idAut,
            nombre: nombre,
            apellido: apellido
        };
        return API.call('addUser', 'POST', value);
    },

    createAdmin: (idAut, nombre, apellido) => {
        const value = {
            idAut: idAut,
            nombre: nombre,
            apellido: apellido
        };
        return API.call('addAdmin', 'POST', value);
    }
}

export const _Groups = {
    //1 Trae todos los grupos
    getGroups: (uid) => {
        return API.call(`getUserGroup?uid=${uid}`, 'GET', {});
    },

    //2 Crea un grupo nuevo role: admin 
    createGroup: (idAdmin, nombreGrupo) => {
        const group = {
            idAdmin: idAdmin,
            nombreGrupo: nombreGrupo
        };
        return API.call('createGroup', 'POST', group);
    },

    //3 Regresa la lista de alumnos de un grupo role:admin
    getUserGroup: (grupoID) => {
        return API.call(`ObtenerAlumnosPorGrupo?grupoID=${grupoID}`, 'GET', {});
    },

    //4 Une al usuario a un grupo role:user
    joinGroup: (idUser, idGrupo) => {
        const value = {
            idUser: idUser,
            idGrupo: idGrupo
        };
        return API.call('joinGroup', 'POST', value);
    },

    //5 Elimina un grupo role:admin
    deleteGroup: (groupID) => {
        const value = {
            groupID: groupID
        };
        return API.call('deleteGroup', 'POST', value);
    }
}

export const _QuizManager = {
    //6 Regresa la lista de quizzes relacionados al usuario
    getQuizzes: () => {
        return API.call(`getQuizz`, 'GET', {});
    },

    //7 Crea un nuevo quiz role:Admin
    createQuiz: (Nombre, Descripcion, Confianza) => {
        const quiz = {
            Nombre: Nombre,
            Descripcion: Descripcion,
            Confianza: Confianza
        };
        return API.call('CrearNuevoQuiz', 'POST', quiz);
    },

    //8 modifica la informacion de un quiz
    modifyQuiz: (quizID, Nombre, Descripcion, Confianza) => {
        const quiz = {
            quizID: quizID,
            Nombre: Nombre,
            Descripcion: Descripcion,
            Confianza: Confianza
        };
        return API.call('modifyQuiz', 'POST', quiz);
    },

    //9 Elimina un quiz
    deleteQuiz: (quizID) => {
        const value = {
            quizID: quizID
        };
        return API.call('deleteQuiz', 'POST', value);
    },


    //10 Devuelve la informacion del quiz mas todas las preguntas del quiz
    getQuiz: (quizID) => {
        return API.call(`getQuiz?quizID=${quizID}`, 'GET', {});
    },
    getQuizAdmin: (quizID) => {
        return API.call(`getQuizzAdmin?quizID=${quizID}`, 'GET', {});
    },

    getQuestions: (quizID) =>{
        return API.call(`ObtenerPreguntasPorQuiz?quizID=${quizID}`, 'GET', {});
        
    },
    
    //11 Agrega una pregunta al quiz
    addQuestion: (quizID, questionTexto, questionCorrecta, questionOpciones) => {
        const question = {
            quizID: quizID,
            questionTexto: questionTexto,
            questionCorrecta: questionCorrecta,
            questionOpciones: questionOpciones
        };
        return API.call('addQuestion', 'POST', question);
    },

    //12 El usuario responde una pregunta 
    answerQuestion: (uid, idQ, response, rConf, idHist) => {
        const value = {
            uid: uid,
            idQ: idQ,
            response: response,
            rConf: rConf,
            idHist: idHist
        };
        return API.call('answerQuestion', 'POST', value);
    },
    //13 Trae todos los resultados generados por ese quiz
    getQuizResults: (idUser, idQuiz) => {
        return API.call(`ObtenerResultados?idUser=${idUser}&idQuiz=${idQuiz}`, 'GET', {});
    }
}