import React from "react"
import './Header.css'

const Nav = () => {
    return (
        <div className="nav">
            <div className="nav-container">
                <ul className="menu-nav d-flex list-unstyled">
                    <li><a href="#" className="navegation">Home</a></li>
                    <li><a href="#" className="navegation">Produtos</a></li>
                    <li><a href="#" className="navegation">Categorias</a></li>
                    <li><a href="#" className="navegation">Meus pedidos</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav