import React from "react"
import './Header.css'

const Nav = () => {
    return (
        <nav className="nav">
            <div className="nav-container">
                <ul className="menu-nav d-flex list-unstyled">
                    <li><a href="#" aria-label="Página Inicial" aria-current="page">Home</a></li>
                    <li><a href="#" aria-label="Página de Produtos">Produtos</a></li>
                    <li><a href="#" aria-label="Categorias de Produtos">Categorias</a></li>
                    <li><a href="#" aria-label="Meus Pedidos">Meus pedidos</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav