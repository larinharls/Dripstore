import React from "react"
import './Header.css'

const Nav = () => {
    return (
        <nav className="nav">
            <div className="container">
                <ul className="menu-nav d-flex list-unstyled">
                    <li><a className="link" href="#">Home</a></li>
                    <li><a className="link" href="#">Produtos</a></li>
                    <li><a className="link" href="#">Categorias</a></li>
                    <li><a className="link" href="#">Meus pedidos</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav