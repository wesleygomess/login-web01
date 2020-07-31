import app from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

    let firebaseConfig = {
        apiKey: "AIzaSyAIp-WUmpn3c9Rpw8H61vfXa6iBuaQDGTo",
        authDomain: "base-dados-d243b.firebaseapp.com",
        databaseURL: "https://base-dados-d243b.firebaseio.com",
        projectId: "base-dados-d243b",
        storageBucket: "base-dados-d243b.appspot.com",
        messagingSenderId: "554901524312",
        appId: "1:554901524312:web:945bfc965df1495ba51f2d",
        measurementId: "G-T4EJHCDNC9"
    };

class Firebase {
    constructor(){
        // inicializa o firebase
        app.initializeApp(firebaseConfig);
    }
    // metódo para efetuar o login, usando email e senha.
    login(email, password){
        return app.auth().signInWithEmailAndPassword(email, password)
    }

    logout(){
        return app.auth().signOut();
    }
    
    // metódo para criar um login com senha, email e nome, este metódo é assícrono assim usa o 'async e await'
    async register(name, email, password){
        await app.auth().createUserWithEmailAndPassword(email, password)

        // pega o udi do usuário atual.
        const uid = app.auth().currentUser.uid;

        return app.database().ref('usuarios').child(uid).set({
            name: name
        })
    }

    isInitialized(){
        return new Promise(resolve => {
            app.auth().onAuthStateChanged(resolve);
        })
    }

    // verifica se tem usuário logado
    getCurrent(){
        return app.auth().currentUser && app.auth().currentUser.email
    }

    async getUserName(callback){
        if(!app.auth().currentUser){
            return null;
        }

        const uid = app.auth().currentUser.uid;
        await app.database().ref('usuarios').child(uid)
        .once('value').then(callback);
    }
}

export default new Firebase();
