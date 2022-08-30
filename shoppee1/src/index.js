import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { 
   BrowserRouter as Router,
   Routes,
   Route,
   Link,
}from "react-router-dom";
import Index from './components/Blog/Index';
import Detail from './components/Blog/Detail';
import Login from './components/Account/Login';
import Register from './components/Account/Register';
import Account from './components/Account/Index';

ReactDOM.render(
  <React.StrictMode>
     <Router>
        <App>
          <Routes>

            <Route  path="/blog/list" element={<Index/>} />
            <Route  path="/blog/detail/:id" element={<Detail/>} />
            <Route  path="/login" element={<Login/>} />
            <Route  path="/register" element={<Register/>} />
            <Route  path="/account/*" element={<Account/>} />
          </Routes>
      </App>
     </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
