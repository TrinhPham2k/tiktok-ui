import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link
} from "react-router-dom";
import PersonList from './PersonList';
import PersonListPost from './PersonListPost';
import PersonListDelete from './PersonListDelete';

import App from './App';
import Home from './Home';
import Shop from './Shop';
import Blog from './Blog';
import Contact from './Contact';
import Cart from './Cart';
import Login from './Login';
import Event from './Event';
import Toogle from './Toogle';
import LoginClick from './LoginClick';
import LogoutClick from './LogoutClick';
import Form from './Form';
import FormInput from './FormInput';
import Register from './Register';
import LoginForm from './LoginForm';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    // <PersonList/>,
    <PersonListPost/>,
    // <PersonListDelete/>,
    // <Router>
    //       <App>
    //         <Routes>
    //             <Route exact path="/" element={<Home/>} />
    //             <Route  path="/shop"  element= {<Shop />}  />
    //             <Route  path="/blog"  element = {<Blog />} />
    //             <Route  path="/contact-us"  element = {<Contact />} />
    //             <Route  path="/cart"  element = {<Cart />} />
    //             <Route  path="/login"  element = {<Login />} />
    //             <Route  path="/event"  element = {<Event />} />
    //             <Route  path="/toogle"  element = {<Toogle />} />
    //             <Route  path="/loginclick"  element = {<LoginClick />} />
    //             <Route  path="/logoutclick"  element = {<LogoutClick />} />
    //             <Route  path="/form"  element = {<Form />} />
    //             <Route  path="/forminput"  element = {<FormInput />} />
    //             <Route  path="/register"  element = {<Register />} />
    //             <Route  path="/loginform"  element = {<LoginForm />} />
    //         </Routes>
    //       </App>      
    // </Router>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
