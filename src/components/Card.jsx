import React from "react"
import './Card.css'

function Card() {
    return (
        <>
            <div className="conteiner Card d-flex">
                <div className="row col-5">
                    <div className="Card1">
                        <h5 className="desconto">30% OFF</h5>
                        <h2>Novo drop Supreme</h2>
                        <button className="linkComprar btn btn-light">Comprar</button>
                        <img src="camisa.png" alt="" width={"250px"} />
                    </div>
                    <div className="Card2">
                        <h5 className="desconto">30% OFF</h5>
                        <h2>Novo drop Supreme</h2>
                        <button className="linkComprar btn btn-light">Comprar</button>
                        <img src="tenis.png" alt="" width={"250px"} />
                    </div>
                    <div className="Card3">
                        <h5 className="desconto">30% OFF</h5>
                        <h2>Novo drop Supreme</h2>
                        <button className="linkComprar btn btn-light">Comprar</button>
                        <img src="fone.png" alt="" width={"250px"} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card