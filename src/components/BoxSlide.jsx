import React from "react"
import './Header.css'

const BoxSlide = () => {
    return (
        <main>
            <div className="box-slide">
                <div className="container">
                    <div className="section-header">
                        <p className="title">Melhores ofertas personalizadas</p>
                        <h1 className="announcement">Queima de estoque Nike</h1>
                        <p className="description">Consequat culpa exercitation mollit nisi excepteur do tempor laboris eiusmod irure consectetur.</p>
                        <div className="button-carousel">
                            <button className="button-offer btn btn-danger">Ver ofertas</button>
                        </div>
                        <div className="tenis">
                            <img src="/tenis-nike.png" alt="Tenis Nike" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="dots swiper-pagination-clickable swiper-pagination-bullets">
                <span className="dot" tabIndex={0} role="button"></span>
            </div>
        </main>
    )
}

export default BoxSlide