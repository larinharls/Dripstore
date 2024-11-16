import React from "react"
import './Header.css'

const BoxSlide = () => {
    return (

        <div className="container">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <h1 class="text-start mt-5 mb-4 fs-6 text-warning">Melhores ofertas personalizadas</h1>
                    <p className="fs-1 fw-bold mb-4">Queima de<br></br> estoque Nike</p>
                        <h1 className="fs-6">Consequat culpa exercitation mollit nisi excepteur do<br></br> do tempor laboris eiusmod irure consectetur.</h1>
                        <button type="button" class="btn btn-primary btn-lg">Ver ofertas</button>
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="/tenis-nike.png" class="d-block w-50" alt="image1"></img>
                    </div>
                    <div class="carousel-item">
                        <img src="..." class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                        <img src="..." class="d-block w-100" alt="..."></img>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        
        



    )
}



export default BoxSlide