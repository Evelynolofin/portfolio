import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Header from './static/Header'
import Footer from './static/Footer'
import { Route, Routes } from 'react-router-dom'
import About from './Components/block/About'
import Contact from './Components/block/Contact'
import Portfolio from './Components/block/Portfolio'

function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/portfolio" component={Portfolio} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App
