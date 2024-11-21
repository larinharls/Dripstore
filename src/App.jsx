import React from "react"
import './App.css'
import Header from "./components/Header"
import Nav from "./components/Nav"
import Card from "./components/Card"
import Oferta from "./components/Oferta"
import ProductCard from "./components/ProductCard"
import Carousel from "./components/Carousel"

function App() {
  return (
    <div className="header">
      <Header />
      <Nav />
      <Carousel/>
      <Card />
      <ProductCard />
      <Oferta/>
      <Footer/>
    </div>

  )
}

export default App