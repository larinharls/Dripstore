import React from "react"
import './App.css'
import Header from "./components/Header"
import Nav from "./components/Nav"
import BoxSlide from "./components/Carousel"
import Card from "./components/Card"
import Oferta from "./components/Oferta"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="header">
      <Header />
      <Nav />
      <BoxSlide />
      <Card />
      <Oferta/>
      <Footer/>
    </div>

  )
}

export default App