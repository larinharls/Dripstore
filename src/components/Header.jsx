import React from "react"
import './Header.css'


const Header = () => {
    return (
        <header className="header">
            <div className="header-bg">
                <div className="line d-flex align-items-center justify-content-between container">
                    <a className="flex items-center" href="">
                        <img src="/logoDS.png" alt="Logo Digital Store" width={200} height={36} />
                    </a>
                    <form className="header-search-wrapper d-flex position-relative" action="" method="get">
                        <input className="input-search form-control" type="text" placeholder="Pesquisar produto..." />
                        <button className="button-search position-absolute end-0 top-50 translate-middle-y text-muted border-0 bg-transparent" type="submit">
                            <i className="fas fa-search"></i>
                        </button>
                    </form>
                    <div className="login-options d-flex">
                        <div className="register">
                            <a href="#" className="register-link">Cadastre-se</a>
                        </div>
                        <div className="enter">
                            <button className="button-enter btn btn-secondary">Entrar</button>
                        </div>
                    </div>
                    <a className="cart-toggle" href="" title="cart">
                        <img src="/carrinho.png" alt="carrinho" width={15} height={15} />
                        <span className="cart-quantily" data-cart="amount">0</span>
                    </a>
                </div>
            </div>
        </header>
    );
};


export default Header