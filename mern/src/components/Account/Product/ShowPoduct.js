import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function ShowPoduct() {
    const [product, setProduct] = useState({})
  

    useEffect(() => {
        const useData = JSON.parse(localStorage.getItem('useState'))
        const url = "http://localhost/laravel/laravel/public/api/user/my-product" 
            const config ={
                headers:{
                    'Authorization': 'Bearer ' + useData.token.token,
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept':'application/json'
                }
        }
        axios.get(url, config)
             .then(res=>{
                setProduct(res.data.data)
             })
             .catch(err => {console.log(err)})
    },[])

    const handleDelete =(id)=>{
         
            const useData = JSON.parse(localStorage.getItem('useState'))
            const url = "http://localhost/laravel/laravel/public/api/user/delete-product/" +id 
                const config ={
                    headers:{
                        'Authorization': 'Bearer ' + useData.token.token,
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Accept':'application/json'
                    }
            }
            axios.get(url, config)
                .then(res=>{
                   setProduct(res.data.data)
                })
                .catch(err => {console.log(err)})
       
    }
   
    const renderProduct =()=>{
        if(Object.keys(product).length > 0){
            return Object.keys(product).map((value)=>{
                // console.log(product[value].image)
                var xx = JSON.parse(product[value].image)
                
                return (
                    <tr>
                    <td className="cart_product">
                      <p>{product[value].id}</p>
                    </td>
                    <td className="cart_total">
                      <p className="cart_total_price">{product[value].name}</p>
                    </td>
        
                    <td className="cart_product">
                      <a href>
                        <img
                          className="cart_img"
                          src={
                            'http://localhost/laravel/laravel/public/upload/user/product/' +
                            product[value].id_user +
                            '/' +
                            xx[0]
                          }
                          alt=""
                        />
                      </a>
                    </td>
                    <td className="cart_quantity">
                      <p className="cart_total_price">${product[value].price}</p>
                    </td>
                    <td className="cart_delete">
                      <Link
                        to={`/account/edit/${product[value].id}` }
                        className="cart_quantity_edit"
                      >
                        <i className="fas fa-edit"></i>
                      </Link>
                      <a
                         onClick ={()=> handleDelete(product[value].id)}
                        className="cart_quantity_delete"
                        href
                      >
                        <i className="fa fa-times" />
                      </a>
                    </td>
                  </tr>
                )
            })
        }
    }
  return (
    <section id="cart_items">
    <div className="table-responsive cart_info">
      <table className="table table-condensed">
        <thead>
          <tr className="cart_menu">
            <td className="image">ID</td>
            <td className="image">Name</td>
            <td className="price">Image</td>
            <td className="quantity">Price</td>
            <td className="total">Action</td>
            <td />
          </tr>
        </thead>
        <tbody>{renderProduct()}</tbody>
      </table>
    </div>
    <Link to="/account/add">
      <button type="submit" class="btn btn-danger">
        Add New
      </button>
    </Link>
  </section>
  )
}
