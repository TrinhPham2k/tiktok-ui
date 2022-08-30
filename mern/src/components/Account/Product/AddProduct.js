import axios from 'axios'
import React, { useEffect, useState } from 'react'
import FormError from '../FormError'

export default function AddProduct() {
    const [category, setCategory] = useState("")
    const [brand, setBrand] = useState("")
    const [files, setFiles] = useState("")
    const [errors, setErrors] = useState({})
    const [inputs, setInputs] = useState({
        status:1
    })
    useEffect(() => {
        axios.get('http://localhost/laravel/laravel/public/api/category-brand')
          .then(res=>{
            setCategory(res.data.category)
            setBrand(res.data.brand)

          })
          .catch(err => {console.log(err)})
    },[])
     const renderOptionsCategory =()=>{
       if(category.length >0){
           return category.map(value=>(
               <option value={value.id} >{value.category}</option>
           ))
       }
      
   }
   const renderOptionsBrand =()=>{
    if(brand.length >0){
        return brand.map(value=>(
            <option value={value.id} >{value.brand}</option>
        ))
    }
   
     }
     const handleShowSale = ()=>{
         if(inputs.status == 0){
            return (

                <input type="text" placeholder="Sale" name="sale"   onChange={handleChange} />
           )
         }
        
     }
    
    const handleChange =(e)=>{
          const value = e.target.value
          const name = e.target.name
          setInputs(prev =>({...prev,[name]:value}))
    }
    
    const handleUserInputFile = (e)=>{
        const files = e.target.files 
        setFiles (files)
    }
    console.log(inputs);
    const handleSubmit =(e)=>{
        e.preventDefault();
        let errSubmit ={}
        let flag =true

        if(inputs.name === undefined){
            flag = false
            errSubmit.name = 'vui long nhap ten sp'
        }
        if(inputs.price === undefined){
            flag = false
            errSubmit.price = 'vui long nhap gia sp'
        }
        if(inputs.company === undefined){
            flag = false
            errSubmit.company = 'vui long nhap company sp'
        }
        if(inputs.detail === undefined){
            flag = false
            errSubmit.detail = 'vui long nhap detail sp'
        }
        if(files == ''){
            flag = false
            errSubmit.avatar ="Vui long nhap image"
        }else{
            if(files.length <=3){
                Object.keys(files).map(file=>{
                    if(files[file]['size'] > 1024*1024){
                        flag = false
                       errSubmit.avatar ="loi file qua lon"
                    }else{
                        let avatarArr = ['png','jpg','jpeg','PNG','JPG']
                        let cutFile =files[file]['name'].split('.');
                            // console.log(cutFile[1])
                        if(!(avatarArr.includes(cutFile[1]))){
                            flag = false;
                            errSubmit.avatar ="loi khong ton tai duoi file"
                        }
                    }
                })
            }

            else{
                errSubmit.avatar ="toi da duoc 3 file"
            }
        }
        // console.log(files)
        
        if(!flag ){
            setErrors(errSubmit)
        }else{
            setErrors({})
            const useData = JSON.parse(localStorage.getItem('useState'))
            const url = "http://localhost/laravel/laravel/public/api/user/add-product" 
            const config ={
                headers:{
                    'Authorization': 'Bearer ' + useData.token.token,
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept':'application/json'
                }
            }
            const formData = new FormData()
            formData.append('name',inputs.name)
            formData.append('price',inputs.price)
            formData.append('category',inputs.category)
            formData.append('brand',inputs.brand)
            formData.append('company',inputs.company)
            formData.append('detail',inputs.detail)
            formData.append('status',inputs.status)
            formData.append('sale',inputs.sale)
            Object.keys(files).map(file=>{
                formData.append('file[]', files[file])
                
            })
            axios.post(url, formData,config)
              .then(res=>{
                //   console.log(res)
              })
              .catch(err=>{console.log(err)})

        }
    }

  return (
    <div class="signup-form">
    <h2>Create Product</h2>
    <FormError  errors = {errors} />
    <form action="#" onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" name="name"   onChange={handleChange} />
        <input type="text"  placeholder="Price" name="price"    onChange={handleChange} />
         <select name='category' onChange={handleChange}>
               <option value="">vui long nhap category</option>

             {renderOptionsCategory()}
         </select>
         <select  name='brand' onChange={handleChange}>
              <option value="">vui long nhap brand</option>

             {renderOptionsBrand()}
         </select>
         <select  onChange={handleChange}  name='status'>
             <option value="1" >News(1)</option>
             <option value="0" >Sale(0)</option>
         </select>
         {handleShowSale()}
        <input type="text" placeholder="Company" name="company"     onChange={handleChange} />
        <input type="file" multiple  name="avatar" onChange={ handleUserInputFile} />
        <textarea type="text" placeholder="Detail"name="detail"     onChange={handleChange}/>
        <button type="submit" class="btn btn-default">Signup</button>
   </form> 
</div>
  )
}
