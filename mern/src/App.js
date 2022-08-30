import './App.css';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import MenuLeft from './components/Layout/MenuLeft';
import { useLocation } from 'react-router-dom';
import { AppConText } from './AppConText';
import { useState } from 'react';



function App(props) {
   
  const location  = useLocation()
  const [cartContext, setCartContext] = useState(0)
  const [wishlistContext, setWishListContext] = useState(0)
   const getValueCart =(qty)=>{
        localStorage.setItem('getValueQty',qty) 
        setCartContext(qty)
   }
   const getValueWishList =(getWishList)=>{
     
      localStorage.setItem('getValueWish',getWishList)
      setWishListContext(getWishList)
   }
  return (
    <>
    <AppConText.Provider value ={
       { getValueCart:getValueCart,
         getValueWishList:getValueWishList
       }
    }>
      
       <Header/>
       <section>
	        	<div className="container">
              <div className="row">
                {location.pathname.includes('account') || location.pathname.includes('cartlist')? '' :  <MenuLeft/>}
                      
                   <div className="col-sm-9">
                       {props.children}
                    </div>
             </div>

            </div>
         </section>
        
       <Footer/>
    </AppConText.Provider>
    </>
  );
}

export default App;
