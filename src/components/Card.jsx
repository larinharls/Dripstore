import React from "react"
import './Card.css'

function Card() {
    return (
        <>
            <div className="Conteiner Card d-flex">
                <div className="row d-flex flex-row col-12 justify-content-sm-evenly">
                    <h4 className="colecoes">Coleções em destaque</h4>
                    <div className="col col-4 Card1 ">
                        <h5 className="desconto">30% OFF</h5>
                        <h2>Novo drop Supreme</h2>
                        <button className="linkComprar btn btn-light">Comprar</button>
                        <img src="camisa.png" alt="" width={"250px"}/>
                    </div>
                    <div className="col col-4 Card2">
                        <h5 className="desconto">30% OFF</h5>
                        <h2>Coleção Adidas</h2>
                        <button className="linkComprar btn btn-light">Comprar</button>
                        <img src="tenis.png" alt="" width={"250px"}/>
                    </div>
                    <div className="col col-4 Card3">
                        <h5 className="desconto">30% OFF</h5>
                        <h2>Novo Beats Bass</h2>
                        <button className="linkComprar btn btn-light">Comprar</button>
                        <img src="fone.png" alt="" width={"250px"}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card