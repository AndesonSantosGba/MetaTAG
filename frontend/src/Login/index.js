import React, {useState} from "react";
import './styles.css'
import '../bootstrap.css'
import {useNavigate} from 'react-router-dom'
import Logo from '../assets/logo2.ico'
import api from '../services/api'


function Login(){
  const [email, setEmail ] = useState('')
  const [senha, setSenha ] = useState('') 
  async function handleLogin(e){
    e.preventDefault()
    const response = await api.post('/', {email, senha})
    if (response.status == 200){
      alert('login realizado')
    }
    if(response.status == 400){
      alert(response.error)


     }
    }
  

    return (
     <div id="tela">
     {/* DIVISÃO ONDE CONTEM A IMAGEM DE ICONE*/}
     <div id="div-imag">
       <img src={Logo} id="imag-innova"  alt="" />
     </div>
     {/* DIVISÃO ONDE CONTEM O TEXTO DE BEM VINDO*/}
     <div>
       <p id="texto_01">SEJA BEM VINDO!</p>
      </div> 
     {/* DIVISÃO ONDE CONTEM O FORMULARIO*/}   
     <div className="form">
       {/* INICIO DO FORMULARIO*/}
       <form onSubmit={handleLogin}>
         <div className="mb-3">
           <label htmlFor="email">Email:</label>
           <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control" id="email" placeholder="Insira seu E-mail" name="email" />
         </div>
         <div className="mb-3">
           <label htmlFor="pwd">Senha:</label>
           <input value={senha} onChange={e => setSenha(e.target.value)} type="password" className="form-control" id="pwd" placeholder="Insira sua senha" name="pswd" />
         </div>
         <div className="form-check mb-3">
           <label className="form-check-label">
             <input className="form-check-input" type="checkbox" name="remember" /> Lembre-se
           </label>
         </div>
         <button type="submit" className="btn btn-primary">Entrar</button>
       </form>
     </div>
   </div>
   
 )
    

}


export default Login