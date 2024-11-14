import React from "react"
import './App.css'
import Header from "./components/Header"
import Nav from "./components/Nav"
import BoxSlide from "./components/Carousel"

function App() {
  return (
    <div className="header">
      <Header />
      <Nav />
      <BoxSlide />
    </div>

  )
}

export default App