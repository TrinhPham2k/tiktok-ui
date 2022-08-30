import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import ProductDetail from '../Product/ProductDetail'
import App from './App'
import Update from './Member/Update'
import AddProduct from './Product/AddProduct'
import EditProduct from './Product/EditProduct'
import ShowPoduct from './Product/ShowPoduct'

export default function AccountIndex() {
  return (
    
    <App>
      <Routes>
          <Route path="/update" element={<Update />}/>
          <Route path="/showproduct" element={<ShowPoduct />}/>
          <Route path="/add" element={<AddProduct />}/>
          <Route path="/edit/:id" element={<EditProduct />}/>
           
          
      </Routes>
    </App>

   
  )
}
