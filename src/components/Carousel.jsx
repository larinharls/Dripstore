import React from "react";
import './Carousel.css';

const Carousel = () => {
  return (
    <div id="carouselSlide" className="carousel slide" data-bs-ride="carousel">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="texts col-md-6">
            <div className="title">
              <h1 className="fs-6 mb-2">Melhores ofertas personalizadas</h1>
            </div>
            <div className="title2">
              <h2 className="announcement">
                <strong>Queima de<br />estoque Nike</strong>
                <img src="/fire.png" className="ms-2" alt="ícone de fogo" style={{ width: "50px", height: "50px" }} />
              </h2>
            </div>
            <div className="description">
              <p className="mb-4" style={{ color: '#474747' }}>
                Consequat culpa exercitation mollit nisi excepteur do<br />
                do tempor laboris eiusmod irure consectetur.
              </p>
            </div>
            <div className="button-offers">
              <button className="button-see btn btn-secondary" style={{ backgroundColor: "#c92071" }}>
                Ver Ofertas
              </button>
            </div>
          </div>

          {/* Carrossel */}
          <div className="col-md-6 mt-6">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="nike1">
                  <img src="/tenis-nike.png" className="d-block w-100 img-rotate" alt="Tênis Nike" />
                </div>
              </div>
              <div className="carousel-item">
                <div className="nike2">
                  <img src="/tenis-nike2.png" className="d-block w-100 img-rotate" alt="Tênis Nike" />
                </div>
              </div>
              <div className="carousel-item">
                <div className="nike3">
                  <img src="/tenis-nike3.png" className="d-block w-100 img-rotate" alt="Tênis Nike" />
                </div>
              </div>
            </div>
            <div className="d-flex">
              <div className="dots-carousel">
                <span className="dot active"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
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
