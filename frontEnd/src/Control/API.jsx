
import { toast } from "react-toastify"

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
    toast.error(text, {
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
    URL: "https://bf3b5167-ec87-4848-8e2a-a4d333ed937d-00-1k638g0zqcvv6.riker.replit.dev/",
    init: function () {

    },
    call: async function (_url, _method, _data, message = "") {

        return await fetch(this.URL + _url, {
            method: _method,
            body: _data

        }).then((resp) => {
            // ERRORES
            if (resp.status == 401) badAlert("Paso algo mal, inténtalo luego")
            if (resp.status == 403) badAlert("Paso algo mal, inténtalo luego")
            if (resp.status == 400) badAlert("Paso algo mal, inténtalo luego")
            if (resp.status == 500) badAlert("Paso algo mal, inténtalo luego")
            if (resp.status >= 400) return null

            // GOOD RESPONSE
            goodAlert(notification)
            return resp.json()

        }).catch(() => {
            // NO INTERNET
            badAlert("No hay conexión , verifica tu red")
            return null
        })


    }
}


export const _UserManager = {
    getUser: (uid) => {
        return API.call($`user/{uid}`, 'GET', {})
    },
    createUser: (uid, role, name) => { }
}


export const _Groups = {
    //1 Trae todos los grupos
    getGroups: (uid) => { },
    //2 Crea un grupo nuevo role: admin 
    createGroup: (uid, group) => { },
    //3 Regresa la lista de alumnos de un grupo role:admin
    getUserGroup: (uid) => {},
    //4 Une al usuario a un grupo role:user
    joinGroup: (uid, groupID) => { },
    //5 Elimina un grupo role:admin
    deleteGroup: (uid, groupID) => {
    }

}

export const _QuizManager = {
    //6 Regresa la lista de quizzes relacionados al usuario
    getQuizzes: (uid) => { },
    //7 Crea un nuevo quiz role:Admin
    createQuiz: (uid, quiz) => {},
    //8 modifica la informacion de un quiz
    modifyQuiz: (quizID, quiz) => { },
    //9 Elimina un quiz
    deleteQuiz: (quizID) => { },
    //10 Devuelve la informacion del quiz mas todas las preguntas del quiz
    getQuiz: (quizID) => { },
    //11 Agrega una pregunta al quiz
    addQuestion: (quizID, question) => { },
    //12 El usuario responde una pregunta 
    answerQuestion: (uid, idQuestion, response) => { },
    //13 Trae todos los resultados generados por ese quiz
    getQuizResults: (idQuiz) => { }

}

// export const _AdminManager = {
// }