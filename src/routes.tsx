import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Categories from './Pages/Categories'
import Product from './Pages/Product'

const Rotas = () => {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/product/:id' element={<Product />} />
      </Routes>
  )
}

export default Rotas
