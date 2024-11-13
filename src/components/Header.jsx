import React from "react"
import './Header.css'


const Header = () => {
    return (
        <header className="header">
            <div className="header-bg">
                <div className="line flex align center justify-between container">
                    <a className="logo" href="">
                        <img src="/logoDS.png" alt="Logo Digital Store" width={200} height={36}>
                        </img>
                    </a>
                    <form className="header-search-wrapper" action="" method="get">
                        <input className="input-search" type="text" placeholder="Pesquisar produto...">
                        </input>
                        <button className="button-search">
                            <i class="fas fa-search">
                            </i>
                        </button>
                    </form>
                    <div className="login-options">
                        <div className="register">
                            <a href="#" className="register-link">Cadastre-se
                            </a>
                        </div>
                        <div className="enter">
                            <button className="button-enter">Entrar
                            </button>
                        </div>
                    </div>
                    <a className="cart-toggle" href="" title="cart">
                        <img src="/carrinho.png" alt="carrinho" width={15} height={15}>
                        </img>
                        <span className="cart-quantily" data-cart="amount">0</span>
                    </a>
                </div>
            </div>
            <nav className="nav">
                <div className="container">
                    <ul class="menu-nav">
                        <li><a className="link" href="">Home</a></li>
                        <li><a className="link" href="">Produtos</a></li>
                        <li><a className="link" href="">Categorias</a></li>
                        <li><a className="link" href="">Meus pedidos</a></li>
                    </ul>
                </div>
            </nav>
            <main>
                <div className="box-slide">
                    <div className="container">
                        <div className="section-header">
                            <p className="title">Melhores ofertas personalizadas</p>
                            <h1 className="announcement">Queima de estoque Nike</h1>
                            <p className="description">Consequat culpa exercitation mollit nisi excepteur do tempor laboris eiusmod irure consectetur.</p>
                            <div className="button-carousel">
                                <button className="button-offer">Ver ofertas</button>
                            </div>
                            <div className="tenis">
                                <img src="/tenis-nike.png">
                                </img>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dots swiper-pagination-clickable swiper-pagination-bullets">
                    <span class="dot" tabIndex={0} role="button">

                    </span>
                </div>


            </main>





            {/* <div className="search-bar">
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
                    <h1>Queima de estoque Nike <img src="/fire.jpg" /></h1>
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
            </div> */}
        </header>
    )
}





export default Header