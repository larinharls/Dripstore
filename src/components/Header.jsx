import React from "react"
import './Header.css'


const Header = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <img src='/logoDS.png' alt="Logo Digital Store" className="logoDS">
                </img> 
            </div>
            <div className="search-bar">
                <input type="text" className="search-input" placeholder="Pesquisar produto...">
                </input>
                <button className="search-btn"></button>
            </div>
            <div className="login">
                <a href="#" className="link-cadastro">Cadastre-se</a>
                <a href="#" className="btn-entrar">Entrar</a>
            </div>
        </header>
    )
}

export default Header