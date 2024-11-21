import React from "react";
import './ProductCard.css';
import Product from "./Product";
import './Product.module.css'

function ProductCard() {
  const produtos = [
    {
      modelo: "Air Max",
      preco: 299,
      precoDesconto: 149.9,
      imagem: "/AirMax.jpg",
    },
    {
      modelo: "Nike PRM",
      preco: 299,
      precoDesconto: 149,
      imagem: "/NikePRM.jpg",
    },
    {
      modelo: "Nike SBI shod",
      preco: 299,
      precoDesconto: 149,
      imagem: "/NikeSB.jpg",
    },
    {
      modelo: "Nike SB Blazer",
      preco: 299,
      precoDesconto: 149,
      imagem: "/NikeSBBlazer.jpg",
    },
    {
      modelo: "Nike SB Bruin",
      preco: 299,
      precoDesconto: 149,
      imagem: "/NikeSBIshod.jpg",
    },
    {
      modelo: "Air Jordan",
      preco: 299,
      precoDesconto: 149,
      imagem: "/AirJordan.jpg",
    },
    {
      modelo: "Nike SB Ishod",
      preco: 299,
      precoDesconto: 1499,
      imagem: "/NikeSBIshod.jpg",
    },
    {
      modelo: "Nike SB Zoom",
      preco: 299,
      precoDesconto: 149,
      imagem: "/NikeSBZoom.jpg",
    },
  ];

  const CardsElement = [];

  for (let i = 0; i < produtos.length; i++) {
    const produto = produtos[i];
    CardsElement.push(
      <Product modelo={produto.modelo} preco={produto.preco} imagem={produto.imagem} precoDesconto={produto.precoDesconto}/>
    );
  }
  

  return (
    <div className="header" style={{display:"flex", maxWidth: "1228px", flexWrap: "wrap", gap: "20px", margin: "auto", justifyContent: "center"}}>
      {CardsElement}
    </div>
  );
}

export default ProductCard;