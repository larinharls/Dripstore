import React from "react"
import './Oferta.css'

function Oferta() {
    return (
        <>

        
            <div className="conteiner">
                <div className="row col">
                    <div className="col col-5 offset-1">
                        <img src="tenis2.png" alt="" className="imgTenis" />
                    </div>
                    <div className="col col-6">
                        <p className="oferta">Oferta especial</p>
                        <h2 className="pg1">Air Jordan edição de colecionador</h2>
                        <p className="tituloAir">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente soluta, enim voluptatibus recusandae similique repellendus repellat temporibus aliquam quaerat numquam saepe, possimus, quo ab quae illo neque praesentium amet.</p>
                        <button className="buttonOferta btn btn-light">Ver oferta</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Oferta



