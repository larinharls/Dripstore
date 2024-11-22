import React from "react"
import './Card.css'

function Card() {
    return (
        <>
            <div className="conteiner Card1 d-flex">
                <div className="row flex-row col-12 justify-content-evenly">
                    <h4 className="colecoes">Coleções em destaque</h4>
                    <div className="col col-4 Card">
                        <h5 className="desconto">30% OFF</h5>
                        <h2 className="text">Novo drop Supreme</h2>
                        <button className="linkComprar btn btn-light">Comprar</button>
                        <img className="img-camisa img-card" src="camisa.png" alt="" width={"350px"}/>
                    </div>
                    <div className="col col-4 Card">
                        <h5 className="desconto">30% OFF</h5>
                        <h2 className="text">Coleção Adidas</h2>
                        <button className="linkComprar btn btn-light">Comprar</button>
                        <img className="img-tenis img-card" src="tenis.png" alt="" width={"250px"}/>
                    </div>
                    <div className="col col-4 Card">
                        <h5 className="desconto">30% OFF</h5>
                        <h2 className="text">Novo Beats Bass</h2>
                        <button className="linkComprar btn btn-light">Comprar</button>
                        <img className="img-fone img-card" src="fone.png" alt="" width={"190px"}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card