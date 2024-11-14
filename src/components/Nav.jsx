import React from "react"
import './Header.css'

const Nav = () => {
    return (
        <nav className="nav">
            <div className="nav-container ">
                <ul className="menu-nav d-flex list-unstyled ">
                    <li><a style={{ color: '#474747' }} className="text-decoration-none" href="#">Home</a></li>
                    <li><a style={{ color: '#474747' }} className="text-decoration-none" href="#">Produtos</a></li>
                    <li><a style={{ color: '#474747' }} className="text-decoration-none" href="#">Categorias</a></li>
                    <li><a style={{ color: '#474747' }} className="text-decoration-none" href="#">Meus pedidos</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav