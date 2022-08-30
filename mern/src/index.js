import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Index from './components/Blog/Index';
import Detail from './components/Blog/Detail';
import Login from './components/Account/Login';
import AccountIndex from './components/Account/Index';
import Home from './components/Product/Home';
import ProductDetail from './components/Product/ProductDetail';
import CartList from './components/Cart/CartList';
import CartWishList from './components/Cart/CartWishList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
       <App>
         <Routes>
             <Route path="/" element={<Home />}/>

             <Route path="/blog/list" element={<Index />}/>
             <Route path="/blog/list/:id" element={<Detail />}/>
             <Route path="/login" element={<Login />}/>
             <Route path="/account/*" element={<AccountIndex />}/>
             <Route path="/product/detail/:id" element={<ProductDetail />} />
             <Route path="/cartlist" element={<CartList />} /> 
             <Route path="/wishlist" element={<CartWishList />} /> 

         </Routes>
       </App>

    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
