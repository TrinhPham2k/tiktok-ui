import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FormError from './FormError'
import Register from './Register'

export default function Login() {

  const navigate = useNavigate()

  const [inputs, setInput] = useState("")
  const [errors,setErrors] =  useState({})
  const handleChange =(e)=>{
      const input = e.target.value
      const name = e.target.name
      setInput(prev =>({...prev,[name]:input}))
  }
  const handleSubmit =(e)=>{
     e.preventDefault();
     let errorSubmit ={};
     let flag = true;
     errorSubmit.email = errorSubmit.password =''
     if(inputs.email === undefined){
        flag = false;
        errorSubmit.email ='Please enter email'
     }
      else{
        var re = /\S+@\S+\.\S+/;
        if( !re.test(inputs.email)){
            flag = false;
            errorSubmit.email ='Email khong dung dinh dang'
        }
    }
     
     if(inputs.password === undefined){
      flag = false;
      errorSubmit.password ='Please enter password'
    
    }
    if(!flag){
       setErrors(errorSubmit)
    }else{
      setErrors({})
      const user ={
         email:inputs.email,
         password:inputs.password,
      }
      axios.post('http://localhost/laravel/laravel/public/api/login' , user )
            .then(res=>{
                if(res.data.errors){
                  setErrors(res.data.errors)

                }else{
                   const objvalue ={
                    data:  res.data.Auth,
                    token : res.data.success
                   }
                   localStorage.setItem('useState', JSON.stringify(objvalue))
                   let checkValue = true
                   localStorage.setItem('useList', JSON.stringify(checkValue))
                   navigate('/')
                }
            })
            .catch(err=>{console.log(err);})
    }
  }
  
  return (
    <>
         <section id="form">{/*form*/}
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-sm-offset-1">
              <div className="login-form">{/*login form*/}
                <h2>Login to your account</h2>
                <FormError errors = {errors}/>
                <form action="#" onSubmit={handleSubmit}>
                  <input type="text" placeholder="Email" name='email'onChange={handleChange} />
                  <input type="password" placeholder="Password"  name='password' onChange={handleChange} />
                  <span>
                    <input type="checkbox" className="checkbox" /> 
                    Keep me signed in
                  </span>
                  <button type="submit" className="btn btn-default">Login</button>
                </form>
              </div>{/*/login form*/}
            </div>
            <div className="col-sm-1">
              <h2 className="or">OR</h2>
            </div>
            <Register />
          </div>
        </div>
      </section>{/*/form*/}
    </>
  )
}
