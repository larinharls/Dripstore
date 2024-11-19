import React from "react";
import './ProductCard.css';
import Product from "./Product";

function ProductCard() {
  const produtos = [
    {
      modelo: "adidas",
      preco: 299,
      imagem: "/AirMax.jpg",
    },
    {
      modelo: "adidas",
      preco: 299,
      imagem: "/NikePRM.jpg",
    },
    {
      modelo: "adidas",
      preco: 299,
      imagem: "/NikeSB.jpg",
    },
    {
      modelo: "adidas",
      preco: 299,
      imagem: "/AirJordan.jpg",
    },
    {
      modelo: "adidas",
      preco: 299,
      imagem: "/NikeSBIshod.jpg",
    },
    {
      modelo: "adidas",
      preco: 299,
      imagem: "/NikeSBBlazer.jpg",
    },
    {
      modelo: "Nike SB Ishod",
      preco: 299,
      imagem: "/NikeSBIshod.jpg",
    },
    {
      modelo: "Nike SB Zoom",
      preco: 299,
      imagem: "/NikeSBZoom.jpg",
    },
  ];

  const CardsElement = [];

  for (let i = 0; i < produtos.length; i++) {
    const produto = produtos[i];
    CardsElement.push(
      <Product modelo={produto.modelo} preco={produto.preco} imagem={produto.imagem} />
    );
  }
  

  return (
    <div className="header" style={{display:"flex", maxWidth: "1228px", flexWrap: "wrap", gap: "20px", margin: "auto", justifyContent: "center"}}>
      {CardsElement}
    </div>
  );
}

export default ProductCard;