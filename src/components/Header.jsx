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
            </div>
            <div className="login">
                <a href="#" className="link-cadastro">Cadastre-se</a>
                <button className="btn-entrar">Entrar</button>
            </div>
            <div className="icon-carrinho">
                <img className="carrinho" src="/carrinho.png" alt="icone de carrinho" />
            </div>
            <div className="menu">
                <ul className="menu-nav">
                    <li><a className="link" href="">Home</a></li>
                    <li><a className="link" href="">Produtos</a></li>
                    <li><a className="link" href="">Categorias</a></li>
                    <li><a className="link" href="">Meus pedidos</a></li>
                </ul>   
            </div>

            <div className="carousel">
                <div className="text-carousel">
                    <p>Melhores ofertas personalizadas</p>
                    <h1>Queima de estoque Nike <img src="/fire.jpg"/></h1>
                </div>
            </div>
            <div className="description-carousel">
                <p>Consequat culpa exercitation mollit nisi excepteur do tempor laboris eiusmod irure consectetur.</p>
            </div>
            <div className="btn-carousel">
                <button className="btn-offer">Ver ofertas</button>
            </div>
            <div className="tenis">
                <img src="/tenis-nike.png" />
            </div>
        </header>
    )
}

export default Header