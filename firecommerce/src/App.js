import logo from './logo.svg'
import './App.css'
import Homepages from './pages/Homepages'

import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom'

import LoginPage from './pages/LoginPage'
import CartPage from './pages/CartPage'
import RegisterPage from './pages/RegisterPage'
import ProductInfo from './pages/ProductInfo'

import './stylesheets/layout.css'
import './stylesheets/products.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Homepages />} />
          <Route path="/login" exact element={<LoginPage />} />
          <Route path="/register" exact element={<RegisterPage />} />
          <Route
            path="/productinfo/:productid"
            exact
            element={<ProductInfo />}
          />
          <Route path="/cart" exact element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
