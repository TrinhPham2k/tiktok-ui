import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import FormError from '../FormError'

export default function EditProduct() {
    const getId = useParams()
    const [products, setproducts] = useState({
      status:1
    })
    const [category, setCategory] = useState("")
    const [brand, setBrand] = useState("")
    const [checkImage, setCheckImage] = useState([])
    const [errors,setErrors] = useState({})
    const [files, setFiles] = useState('')
    const[success, setSuccess] = useState("")
     useEffect(() => {
          let userData = JSON.parse(localStorage.getItem('useState'))
          
          const url = 'http://localhost/laravel/laravel/public/api/user/product/' + getId.id
          const config ={
            headers:{
              'Authorization': 'Bearer ' + userData.token.token,
              'Content-Type': 'application/x-www-form-urlencoded',
              'Accept': 'application/json'
            }
          }
          axios.get(url, config)
               .then(res=>{
                  setproducts(res.data.data)
               })
               .catch(err=>{console.log(err)})
     },[])
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
  if(products.status == 0){
     return (

         <input type="text" placeholder="0"  name="sale" onChange={handleChange}    />
    )
  }
 
}
 const handleChange =(e)=>{
     const value = e.target.value
     const name = e.target.name
     setproducts(prev =>({...prev,[name]:value}))
 }

 const handleUserInputFile =(e)=>{
     const files = e.target.files
     setFiles(files)
 }

  const handleShowImage =()=>{
    if(products.image){
     
       return products.image.map(value =>(
          
        <>
        <div>
          <img
            className="cart_img"
            src={
              'http://localhost/laravel/laravel/public/upload/user/product/' +
              products.id_user +
              '/' +
              value
            }
            alt=""
          />
          <input
             type="checkbox"
             checked={checkImage.includes(value)}
            value={value}
            onChange={handleCheckBox}
          
          />
        </div>
      </>
     ))
    }
  }

  const handleCheckBox = (e) => {
    let valueImage = e.target.value
    setCheckImage(prev =>{
       const isChecked = checkImage.includes(valueImage) 
       if(isChecked){
            return checkImage.filter(item => item != valueImage)
       }else{
           return [...prev,valueImage]
       }
    })
  
  
  }


  const handleSubmit =(e)=>{
        e.preventDefault()
        let errSubmit ={}
        let flag =true
        if(products.name == ''){
            flag=false
            errSubmit.name ='Vui long nhap ten sp'
        }
        if(products.price == ''){
          flag=false
          errSubmit.price ='Vui long nhap price sp'
       }
       if(products.company_profile == ''){
        flag=false
        errSubmit.company_profile ='Vui long nhap company sp'
     }
     if(products.detail == ''){
      flag=false
      errSubmit.detail ='Vui long nhap detail sp'
      }
      if(files ===''){
         flag=false
         errSubmit.avatar ='Vui long nhap avatar sp'
      }else{
        // lấy hình ảnh còn lại
          let imageRemoved =products.image.filter((item) => !checkImage.includes(item))
           let image = imageRemoved.length + files.length
           if(image <=3){
            Object.keys(files).map((valuefile) => {
              if (files[valuefile]['size'] > 1024 * 1024) {
                flag = false
                errSubmit.avatar = 'Loi size qua lon'
              } 
              let avatarArr = ['png', 'jpg', 'jpeg', 'PNG', 'JPG']
              let cutFile = files[valuefile]['name'].split('.')
              // console.log(cutFile[1])
              if (!avatarArr.includes(cutFile[1])) {
                flag = false
                errSubmit.avatar = 'loi khong ton tai duoi file'
              }
            })
           }else{
            flag=false
            errSubmit.avatar ='chi dc toi dc 3 fileupload'
           }
            //  products.image.filter(item =>item === checkImage)
         

      }
      
        if(!flag){
            setErrors(errSubmit)
        }else{
          setErrors({})
           const useData = JSON.parse(localStorage.getItem('useState'))
           const url = 'http://localhost/laravel/laravel/public/api/user/edit-product/'+ products.id
           const config={
            headers:{
              'Authorization': 'Bearer ' + useData.token.token,
              'Content-Type': 'application/x-www-form-urlencoded',
              'Accept': 'application/json'
            }
           }
           const formData = new FormData()
           formData.append('name',products.name)
            formData.append('price',products.price)
            formData.append('category',products.id_category)
            formData.append('brand',products.id_brand)
            formData.append('company',products.company_profile)
            formData.append('detail',products.detail)
            Object.keys(files).map(file=>{
              formData.append('file[]', files[file])
              
          })
          checkImage.map(item=>(
            formData.append('avatarCheckBox[]', item)
          ))
           axios.post(url, formData,config)
             .then(res=> {
                   console.log(res)
                   setSuccess('update thanh cong')
             })
             .catch(err=> {
               console.log(err) 
                setSuccess('')
             })
        }

  }

  return (
    <div class="signup-form">
    <h2>Update Product</h2>
     <FormError  errors = {errors} />
     <p>{success}</p>
    <form action="#" onSubmit={handleSubmit} >
        <input type="text" placeholder="Name" name="name" value={products.name} onChange={handleChange}   />
        <input type="text"  placeholder="Price" name="price" value={products.price}  onChange={handleChange}   />
         <select name='category'  value={products.id_category} onChange={handleChange} >
               {renderOptionsCategory()}

         </select>
         <select  name='brand'  value={products.id_brand} onChange={handleChange} >
             {renderOptionsBrand()}


         </select>
         <select   name='status' value={products.status} onChange={handleChange} >
             <option value="1" >News(1)</option>
             <option value="0" >Sale(0)</option>
         </select>
         {handleShowSale()}
        <input type="text" placeholder="Company" name="company_profile" value={products.company_profile} onChange={handleChange}    />
        <input type="file" multiple  name="avatar" onChange ={handleUserInputFile}  />
        <div class="cart-img-group">{handleShowImage() }</div>
        <textarea type="text" placeholder="Detail"name="detail" value={products.detail}  onChange={handleChange}   />
        <button type="submit" class="btn btn-default">Signup</button>
   </form> 
</div>
  )
}
