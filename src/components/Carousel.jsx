import React from "react";
import './Carousel.css';

const Carousel = () => {
  return (
    <div id="carouselSlide" className="carousel slide" data-bs-ride="carousel">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="text-warning fs-6 mb-2">Melhores ofertas personalizadas</h1>
            <h2 className="fs-1 fw-bold">
              Queima de<br />estoque Nike
              <img src="/fire.png" className="ms-2" alt="ícone de fogo" style={{ width: "50px", height: "50px" }} />
            </h2>
            <p className="mb-4" style={{ color: '#474747' }}>
              Consequat culpa exercitation mollit nisi excepteur do<br />
              do tempor laboris eiusmod irure consectetur.
            </p>
            <button className="btn btn-lg text-white fw-bold" style={{ backgroundColor: "#D30077" }}>
              Ver ofertas
            </button>
          </div>

          {/* Carrossel */}
          <div className="col-md-6">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="/tenis-nike.png" className="d-block w-100 img-rotate" alt="Tênis Nike" />
              </div>
              <div className="carousel-item">
                <img src="/tenis-nike2.png" className="d-block w-100 img-rotate" alt="Tênis Nike" />
              </div>
              <div className="carousel-item">
                <img src="/tenis-nike3.png" className="d-block w-100 img-rotate" alt="Tênis Nike" />
              </div>
            </div>

            <div className="d-flex justify-content-center mt-4">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>

            {/* Controles de navegação */}
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselSlide" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselSlide" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
