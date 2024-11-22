import React from "react";
import './ProductCard.css';
import Product from "./Product";
import './Product.module.css';
import "../components/ProductCard.css";

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
      imagem: "/NikeSBBruin.jpg",
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
      precoDesconto: 149,
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
    <>
    <div className="container" >

      <div style={{display: "flex", width: "100%", justifyContent: "space-between"}}>
        <h4 className="ProdutosEmAlta">Produtos em alta</h4>
        
        <div className="VerTodos">
            <p>Ver mais</p>
        </div>

      </div>
      

      <div className="header" style={{display:"flex", maxWidth: "1300px", flexWrap: "wrap", alignItems: "center", gap: "20px", justifyContent: "space-between"}}>
        {CardsElement}
      </div>

    </div>
    </>
  );
}

export default ProductCard;