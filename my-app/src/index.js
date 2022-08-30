import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link
} from "react-router-dom";
// import Demo from './Demo';
import App from './App';
import Home from './Home';
import Blog from './Blog';
import Contact from './Contact';
import Event from './Event';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
      <App>
        <Routes>
             <Route exact path="/" element={<Home />}  />
             <Route  path="/blog" element={<Blog />}  />
             <Route  path="/contact" element={<Contact />}  />
             <Route  path="/event" element={<Event />}  />
        </Routes>
      </App>

  </Router>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
