import React from 'react'
import {Link} from 'react-router-dom'
import Logo2 from '../../assets/logo2.png'
import Loading  from '../../assets/Loading'

function Home(){
    
    return (
      <nav className="navbar navbar-light bg-light">
      <Link id="icone" className="navbar-brand" to='/home'>
        <img id="icone" src={Logo2} width={30} height={30} className="d-inline-block align-top" alt="" />
        INNOVA EMPREENDIMENTOS - Sistema de Gestão de Negócio
      </Link>
      <Link id="icone" className="navbar-brand" to="/">
        Sair
      </Link>
      <Loading/>
    </nav>
    )
}

export default Home