import axios from 'axios'
import React, { useEffect, useState } from 'react'
import FormError from '../FormError'

export default function Update() {
    const [errors, setErrors] = useState({})
    const [avatar, setAvatar] = useState('')
    const [file, setFile] = useState('')
    const [inputs, setInputs] = useState({
        
        id :"",
        username:"",
        email:"",
        address:"",
        phone:"" ,
        pass:""
    })
    useEffect(() =>{
        const xx = JSON.parse(localStorage.getItem('useState'))
        if(xx){
             setInputs({
                id: xx.data.id,
                username: xx.data.name,
                email: xx.data.email,
                address: xx.data.address,
                phone:xx.data.phone, 
             })
        }
    },[])
    // console.log(inputs);
    const handleChange =(e)=>{
        const value = e.target.value
        const name = e.target.name
        setInputs(prev =>({...prev, [name]:value}))
    }
    const handleUserInputFile =(e)=>{
        const files = e.target.files
        let reader = new FileReader();
        reader.onload = (e) =>{
            setAvatar(e.target.result)
            setFile(files[0])
        }
        reader.readAsDataURL(files[0])
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        let errSubmit ={}
        let flag = true
        if(inputs.username === ''){
            flag =false
            errSubmit.username = 'vui lonng nhap username'
        }
        if(inputs.address === ''){
            flag =false
            errSubmit.address = 'vui lonng nhap address'
        }
        if(inputs.phone === ''){
            flag =false
            errSubmit.phone = 'vui lonng nhap phone'
        }
        if(file ==''){
            flag = false
            errSubmit.avatar ='vui long chon file'
        }else{
             if(file['size'] >1024 *1024){
                flag = false
                errSubmit.avatar ='loi file qua lon'
             }else{
                let avatarArr = ['png','jpg','jpeg','PNG','JPG']
                let cutName = file['name'].split('.')
                if(!avatarArr.includes(cutName[1])){
                    flag =false
                    errSubmit.avatar ='loi duoi file khong ton tai'
                }
             }
        }
        
        if(!flag){
            setErrors(errSubmit)
        }else{
            setErrors({})
            const useData = JSON.parse(localStorage.getItem('useState'))
            // console.log(useData)
            const url = 'http://localhost/laravel/laravel/public/api/user/update/'+ inputs.id
          
            const config ={
                headers:{
                    'Authorization': 'Bearer ' + useData.token.token,
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json'
                }
            }

            
            const formData = new FormData()
            formData.append('name',inputs.username);
            formData.append('email',inputs.email);
            formData.append('password',inputs.pass);
            formData.append('phone',inputs.phone);
            formData.append('address',inputs.address);
            formData.append('avatar',avatar);

            axios.post(url,formData,config)
                  .then(res=>{
                    if(res.data.errors){
                        setErrors(res.data.data.errors)
                    }else{
                        const newdata ={
                            data: res.data.Auth,
                            token: res.data.success
                        }
                         localStorage.setItem('useState',JSON.stringify(newdata))
                    }
                  })
                  .catch(err=>{console.log(err)})
        }
    }
  return (
    <div class="signup-form">
    <h2>User Update</h2>
    <FormError errors ={errors}/>
    <form action="#" onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" name="username" value={inputs.username}  onChange={handleChange} />
        <input type="text" readonly placeholder="Email Address" name="email" value={inputs.email}   onChange={handleChange} />
        <input type="password" placeholder="Password" name="pass" value={inputs.password}   onChange={handleChange} />
        <input type="text" placeholder="Phone" name="phone" value={inputs.phone}    onChange={handleChange} />
        <input type="text" placeholder="Address"name="address" value={inputs.address}    onChange={handleChange}/>
        <input type="file" placeholder="Avatar"name="avatar" onChange={ handleUserInputFile} />
        <button type="submit" class="btn btn-default">Signup</button>
   </form> 
</div>
  )
}
