import axios from 'axios'
import React, { useState } from 'react'
import FormError from './FormError'

export default function Register() {
    const [inputs, setInputs] = useState("")
    const [errors, setErrors] = useState({})
    const [avatar, setAvatar] = useState("")
    const [file, setFile] = useState("")
    const [success,setSuccess] = useState("")
    
    const handleChange =(e)=>{
         const input = e.target.value 
         const name = e.target.name
         setInputs(prev =>(
             {
                 ...prev, 
                 [name]:input
             }
         ))
 
    }
   const handleChangeFile=(e)=>{
       const files = e.target.files
       let reader = new FileReader();
       reader.onload =(e)=>{
          setAvatar(e.target.result)
          setFile(files[0])
       }
       reader.readAsDataURL(files[0])
    }
    
    
    const handleSubmit =(e)=>{
        e.preventDefault();
        let flag =true;
        let errSubmit = {}

        errSubmit.name =errSubmit.email=errSubmit.pass =errSubmit.phone =errSubmit.address =''
        
        if(inputs.name === undefined){
            flag = false;
            errSubmit.name ='Please enter name'
        }
        if(inputs.email === undefined){
            flag = false;
            errSubmit.email ='Please enter email'
           
        }else{
            var re = /\S+@\S+\.\S+/;
            if( !re.test(inputs.email)){
                flag = false;
                errSubmit.email ='Email khong dung dinh dang'
            }
        }
        if(inputs.pass === undefined){
            flag = false;
            errSubmit.pass ='Please enter password'
        }
        if(inputs.phone === undefined){
            flag = false;
            errSubmit.phone ='Please enter phone'
        }
        if(inputs.address === undefined){
            flag = false;
            errSubmit.address ='Please enter address'
        }
        if(file === ''){
            flag = false;
            errSubmit.avatar ='Please enter file'
        }else{
             if(file['size'] >1024*1024){
                flag = false;
                errSubmit.avatar ='lo size qua lon'
             }
             let avatarArr = ['png','jpg','jpeg','PNG','JPG']
             if(!avatarArr.includes(file['name'].split('.')[1])){
                flag = false;
                errSubmit.avatar ='duoi file khong ton tai'
             }
            
        }
        if(!flag){
            setErrors(errSubmit)
        }else{
            setErrors({})
            const user ={
                name: inputs.name,
                email: inputs.email,
                password: inputs.pass,
                phone: inputs.phone,
                address : inputs.address,
                avatar : avatar,
                level:0
            }
           
            axios.post('http://localhost/laravel/laravel/public/api/register' , user )
                 .then(res=>{
                     if(res.data.errors){

                         setErrors(res.data.errors)
                         setSuccess('')
                     }else{
                        setSuccess('DK thanh cong')
                     }
                 })
                 .catch(err=>{
                     console.log(err);
                     
                })
        }
    }
  
  return (
    <div>
        <div className="col-sm-4">
              <div className="signup-form">{/*sign up form*/}
                <h2>New User Signup!</h2>
                 <FormError  errors = {errors} />
                 <p>{success}</p>
                <form action="#" onSubmit={handleSubmit}>
                  <input type="text" placeholder="Name" name ="name" onChange={handleChange} />
                  <input type="text" placeholder="Email Address" name ="email" onChange={handleChange} />
                  <input type="password" placeholder="Password" name ="pass" onChange={handleChange} />
                  <input type="text" placeholder="Phone" name ="phone" onChange={handleChange} />
                  <input type="text" placeholder="Address" name ="address" onChange={handleChange} />
                  <input type="file" name ="avatar" onChange={handleChangeFile}  />
                  
                  <button type="submit" className="btn btn-default" >Signup</button>
                </form>
              </div>{/*/sign up form*/}
            </div>
    </div>
  )
}
