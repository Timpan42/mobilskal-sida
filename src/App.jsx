import { BrowserRouter, Routes, Route } from 'react-router-dom'

import "./App.css"

import NavBar from './componets/NavBar'
import Footer from './componets/Footer'


import HomePage from './pages/HomePage'
import ShellPage from './pages/ShellPage'
import CartPage from './pages/CartPage'
import ContactPage from './pages/ContactPage'
import ProductsPage from './pages/ProductsPage'


import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>

          <Route path='/' element={<HomePage />} />
          <Route path='/ShellPage' element={<ShellPage />} />
          <Route path='/CartPage' element={<CartPage />} />
          <Route path='/ContactPage' element={<ContactPage />} />
          <Route path='/ProductsPage' element={<ProductsPage />} />

        </Routes>

        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
