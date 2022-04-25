import React from "react";
import './styles.css'
import '../bootstrap.min.css'
import Logo from '../assets/logo2.ico'

function Login(){
    return (
     <div id="tela">
     {/* DIVISÃO ONDE CONTEM A IMAGEM DE ICONE*/}
     <div id="div-imag">
       <img id="imag-innova" src={Logo} alt="" />
     </div>
     {/* DIVISÃO ONDE CONTEM O TEXTO DE BEM VINDO*/}
     <div>
       <p id="texto_01">SEJA BEM VINDO!</p><p>
       </p></div> 
     {/* DIVISÃO ONDE CONTEM O FORMULARIO*/}   
     <div id="form">
       {/* INICIO DO FORMULARIO*/}
       <form action="/dash.html">
         <div className="mb-3 mt-3">
           <label htmlFor="email">Email:</label>
           <input type="email" className="form-control" id="email" placeholder="Insira seu E-mail" name="email" />
         </div>
         <div className="mb-3">
           <label htmlFor="pwd">Senha:</label>
           <input type="password" className="form-control" id="pwd" placeholder="Insira sua senha" name="pswd" />
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