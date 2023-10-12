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
  const [data, setData] = useState([])

  async function fetchData() {
    await fetch('http://localhost:3000')
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result)
      }).catch(err => {
        console.log(err)
      })
  }


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
