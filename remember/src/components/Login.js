import React from 'react';
import '../components/Login.css';
import { useNavigate } from 'react-router-dom';
import { loginGoogle } from '../firebase/firebase.js';

//Funcion para logearse con Google
const Login = ()=> {
    const navigate= useNavigate();
    const loginWithGoogle =() =>{
        loginGoogle().then((result) => {
            navigate('/Wall'); //para cambiar la vista
           console.log(result)
       })
       .catch(error => console.log(error))
    }
    //Vista en la interfaz
    return(
    <div className="login">
        <div className='logo'>
        <img 
          src={require("../Image/logo.png")}/>
        </div>
    <h1 className='titleLogin'>Inicia Sesion con</h1>
    <button onClick={loginWithGoogle} id='btnGoogle' className='button'>google</button>
    <footer className='footer'>
        Creado por Michell Vanegas
        </footer>
    </div>
    );
};

export default Login;