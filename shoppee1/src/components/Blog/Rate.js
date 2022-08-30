import axios from 'axios';
import { useEffect, useState } from 'react';
import StarRatings from 'react-star-ratings';

function Rate(props){
    
    const [rate, setRate] = useState(0)
    const [checkLogin, setCheckLogin] = useState("")

    useEffect(() =>{
        axios.get("http://localhost/laravel/laravel/public/api/blog/rate/" + props.idblog)
        .then(res => {
            // console.log(res.data.data)
            let dataRate = res.data.data
           const lengthRate = Object.keys(dataRate).length
            var sum=0
           if( lengthRate > 0){
                Object.keys(dataRate).map(value =>{
                   sum  += dataRate[value].rate
                
               })
              
           }
           if(lengthRate > 0){
                let averge =  sum / lengthRate 
               setRate(averge);
           }
        })
        .catch(err => console.log(err))
    },[])
    const changeRating =(newRating,name)=>{
        
        var xx = localStorage.getItem('useList')
        var vv = JSON.parse(xx)
        if(vv) {
            const useData = JSON.parse(localStorage.getItem('userState'))
            const url = "http://localhost/laravel/laravel/public/api/blog/rate/" + props.idblog
            const config ={
                headers:{
                    'Authorization': 'Bearer ' + useData.token.token,
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept':'application/json'
                }
            }
            if(rate){
                const formData = new FormData()
                formData.append('blog_id',props.idblog)
                formData.append('user_id',useData.data.id)
                formData.append('rate',newRating)
                axios.post(url,formData,config)
                 .then(res =>{
                    //  console.log(res)
                 })
                 .catch(err =>{console.log(err);})
                 
            }

        } else{
            setCheckLogin("Vui long login de Rate")
        }
        setRate(newRating) 

    }
    return(
      <>
           
            <p>{checkLogin}</p>
            <StarRatings
                rating = {rate}
                starRatedColor = "red"
                changeRating={changeRating}
                    numberOfStars={5}
                    name='rating'
            />   
      </>
    )
}
export default Rate;