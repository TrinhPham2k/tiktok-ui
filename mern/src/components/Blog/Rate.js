import axios from 'axios';
import React, { useEffect, useState } from 'react'
import StarRatings from "react-star-ratings";

export default function Rate({idRate}) {
   
    const [rating, setRating] = useState(0)
     const [checkLogin, setCheckLogin] = useState("")
     useEffect(() => {
        axios.get( "http://localhost/laravel/laravel/public/api/blog/rate/" + idRate)
            .then(res=>{
              
                // console.log(res.data.data)
                let dataRate = res.data.data
                // console.log(dataRate)
                // console.log(Object.keys(dataRate).length);
                var sum=0;
                if(Object.keys(dataRate).length >0) {
                     Object.keys(dataRate).map((value) => {
                          
                                 const valueRate = dataRate[value].rate
                                sum +=valueRate
                                // console.log(sum);        
                     })
                }
                   const lengthRate = Object.keys(dataRate).length
                  //  console.log(lengthRate);
                   if(lengthRate  >0){
                         let averge =  sum / lengthRate 
                         setRating(averge)
                        //  console.log(averge);
                   }

                
            })

            .catch(err=>console.log(err))
     },[])

      const changeRating =(newRating)=>{
        const xx = localStorage.getItem('useList')
        const vv = JSON.parse(xx)
        if(vv){
             const useData = JSON.parse(localStorage.getItem('useState'))
             const url = "http://localhost/laravel/laravel/public/api/blog/rate/" + idRate
             const config ={
                headers:{
                    'Authorization': 'Bearer ' + useData.token.token,
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept':'application/json'
                  }
              }
             if(rating){
                const formData = new FormData()
                formData.append('blog_id', idRate)
                formData.append('user_id',useData.data.id)
                formData.append('rate',newRating)
                axios.post(url,formData , config)
                     .then(res=>{
                        //  console.log(res);
                     })
                     .catch(err=>{console.log(err)})
             }else{
                 console.log('vui long danh gia')
             }
        }else{
            setCheckLogin('Vui long Login de danh gia')
        }
         setRating( newRating);

      }
  return (
    <>
             <span>
                <StarRatings
                    rating = {rating}
                    starRatedColor="blue"
                    changeRating={changeRating}
                    numberOfStars={5}
                    name='rating' 
                   
                />
              </span>
    </>
  )
}
