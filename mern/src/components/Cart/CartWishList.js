import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
export default function CartWishList() {
  const [wishlists,setWishList] = useState([])
  const [wishlists1,setWishList1] = useState([])
  
  useEffect(() => {
      axios.get('http://localhost/laravel/laravel/public/api/product/wishlist')
      .then(res=>{
           setWishList(res.data.data)
      })
      .catch(err => console.error(err))
  },[])
  const handleWishList =()=>{
   let wishlistLoc = JSON.parse(localStorage.getItem('valueWishList'))
   let aa =[]
    if(wishlistLoc){
        if(wishlists.length>0){
          wishlists.map(wishlist =>{
             if(wishlistLoc.includes(wishlist.id)){
                aa.push(wishlist);
             }
          })
          //  console.log(aa);
          
        //   aa = wishlists.reduce((init,ele)=>{
        //       if(wishlistLoc.includes(ele.id)){
        //           init.push(ele)
        //       }
        //       return init
        // },[])
 
        //  var aa = wishlists.filter(item =>(
        //       wishlistLoc.includes(item.id)
        //  ))
        // console.log(aa)
    }
  
  }
  
    if(aa.length>0){
       return aa.map(wishlist=>{
          let xx = JSON.parse(wishlist.image)
        return (
          <>
            
                         
                          <div className="col-sm-4">
                          <div className="product-image-wrapper">
                            <div className="single-products">
                              <div className="productinfo text-center">
                                <img  src={
                            'http://localhost/laravel/laravel/public/upload/user/product/' +
                            wishlist.id_user +
                            '/' +
                            xx[0]
                           } alt="" /> 
                                <h2>${wishlist.price}</h2>
                                <p>{wishlist.name}</p>
                                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart222</a>
                              </div>
                              <div className="product-overlay">
                                <div className="overlay-content">
                                  <h2>$56</h2>
                                  <p>Easy Polo Black Edition</p>
                                  <form >
                                    <input defaultValue={56} type="hidden" name="price" />
                                    <input defaultValue="asy Polo Black Edition" type="hidden" name="title" />
                                   
                                      <button type="submit" className="btn btn-default add-to-cart" 
                                         >
                                        <i className="fa fa-shopping-cart" />Add to cart
                                        </button>
                                  
                                   
                                  </form>
                                </div>
                              </div>
                            </div>
                            <div className="choose">
                              <ul className="nav nav-pills nav-justified">
                                <li> <button
                               onClick={()=>hanldeDelete(wishlist.id)}
                              type="submit"
                            >
                              <i className="fa fa-plus-square" />
                              Remove to wishlist
                            </button></li>
                                <li><Link to=''><i className="fa fa-plus-square" />Read more</Link></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        
          </>
        )
       })
    }
   
  }

  const hanldeDelete =(id)=>{
    let wishlistLoc = JSON.parse(localStorage.getItem('valueWishList'))
    if(wishlistLoc){
      wishlistLoc.map((value,index) =>{
        //  console.log(value)
          if(value == id){
            delete wishlistLoc[index]
          }
      })
     
    }
    let aa =[]
      wishlistLoc.map(value=>{
          aa.push(value)
      })
      setWishList1(aa)
      
    localStorage.setItem('valueWishList',JSON.stringify(aa))
  }

  return (
    <>
      
                   
                  {handleWishList()}
                  
    </>
  )
}
