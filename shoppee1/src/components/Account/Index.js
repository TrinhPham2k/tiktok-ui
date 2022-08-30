import React from 'react';

import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link
}from "react-router-dom";
import App from './App';
import UpdateUser from './Member/UpdateUser';
import Add from './Product/Add';


function Index(){
    return(
         <App>
             <Routes>
                  <Route path="/update" element={<UpdateUser/>}/>
                 <Route path="/add" element={<Add/>}/>  
            </Routes>  
         </App>
    )
}
export default Index;