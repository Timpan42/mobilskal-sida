import { BrowserRouter, Routes, Route } from 'react-router-dom'

import "./App.css"

import NavBar from './componets/NavBar'
import Footer from './componets/Footer'


import HomePage from './pages/HomePage'
import ShellPage from './pages/ShellPage'
import CartPage from './pages/CartPage'
import ContactPage from './pages/ContactPage'
import ProductsPage from './pages/ProductsPage'

import { ProductIdContextProvider } from './componets/context/ProductContext'
import { CartContextProvider } from './componets/context/CartContext'
import { useState, createContext, useContext } from 'react'
import './App.css'


function App() {
  const [productId, setProductId] = useState()

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <CartContextProvider>
          <ProductIdContextProvider>
            <Routes>

              <Route path='/' element={<HomePage />} />

              <Route path='/ShellPage' element={<ShellPage />} />

              <Route path='/CartPage' element={<CartPage />} />
              <Route path='/ContactPage' element={<ContactPage />} />

              <Route path='/ProductsPage' element={<ProductsPage />} />

            </Routes>
          </ProductIdContextProvider>
        </CartContextProvider>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
