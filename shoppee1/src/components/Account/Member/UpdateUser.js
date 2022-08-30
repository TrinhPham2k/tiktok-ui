import axios from "axios";
import { useEffect, useState } from "react";

function UpadateUser(){

    const [errors, setErrors] = useState({});
    const [avatar,setAvatar] =useState("");
    const [fileUpload,setFileUpload] =useState("")
    const [inputs, setInputs] = useState({
        token:"",
        id:"",
        name: "",
        email: "",
        phone: "",
        address:"",
        
    })
    
    useEffect(() => {
        let xx = localStorage.getItem('userState')
        
        if(xx){
            const vv = JSON.parse(xx)
            
            setInputs({ 
                  token: vv.token,
                  id: vv.data.id,
                  name: vv.data.name,
                  email:vv.data.email,
                  phone:vv.data.phone,
                  address:vv.data.address,
                  
              })
           }
        },[])
        const handleChange = (e) => {
             const inputname = e.target.name;
             const value = e.target.value;
             setInputs(state => ({...state,[inputname]:value}))
        }
        function handleUserInputFile(e){
             let file = e.target.files
             let reader= new FileReader();
             reader.onload =(e)=>{
                 setAvatar(e.target.result)
                 setFileUpload(file[0])
             }
             reader.readAsDataURL(file[0])
        }
        const handleSubmit =(e) => {
            e.preventDefault();
            let errSubmit ={};
            let flag = true;
            errSubmit.name = errSubmit.phone =  errSubmit.address = ""

            if(inputs.name == ""){
                flag = false;
                errSubmit.name ="Vui long nhap name"
            }
            if(inputs.phone == ""){
                flag = false;
                errSubmit.phone ="Vui long nhap phone"
            }
            if(inputs.address == ""){
                flag = false;
                errSubmit.address ="Vui long nhap address"
            }
            if(fileUpload ==""){
                flag = false;
                errSubmit.avatar ="Vui long chon file"
            }else{
                flag = true;
                errSubmit.avatar =""
                if(fileUpload.size > 1024 * 1024){
                    flag = false;
                    errSubmit.avatar ="loi size qua lon" 
                }else{
                    flag = true;
                    errSubmit.avatar =""
                    let avatarArr = ['png','jpg','jpeg','PNG','JPG']
                    let cutimg = fileUpload.name.split('.')
                    if(!avatarArr.includes(cutimg[1])){
                        flag = false;
                        errSubmit.avatar ="loi khong ton tai duoi file"
                        
                    }
                }
            }
            if(!flag){
                setErrors(errSubmit)
            }else{
                setErrors({})
                const url = 'http://localhost/laravel/laravel/public/api/user/update/' + inputs.id
                const config ={
                    headers:{
                        'Authorization': 'Bearer ' + inputs.token.token,
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Accept':'application/json'
                    }
                }
                const formData = new FormData();
                formData.append('name',inputs.name);
                formData.append('email',inputs.email);
                formData.append('password',inputs.pass);
                formData.append('phone',inputs.phone);
                formData.append('address',inputs.address);
                formData.append('avatar',avatar);
                axios.post(url, formData,config)
                .then(res =>{
                    // console.log(res);
                    // loi api tra ve
                    if(res.data.errors){
                         setErrors(res.data.errors)
                    }else{

                            let userUpate ={
                                data: res.data.Auth,
                                token:res.data.success
                            }
                           localStorage.setItem('userState', JSON.stringify(userUpate))
                    }
                    
                })
                .catch(err =>console.error(err))
            }
        }
      
      const renderError =()=>{
           if(Object.keys(errors).length >0 ){
               return Object.keys(errors).map((error,index)=>{
                   return <li key={index}>{errors[error]}</li>  
                   
               })
           }
      }

    return(
        <>
             
            <div className="signup-form" >{/*sign up form*/}
                 <h2>User Update</h2>
                 <ul>{ renderError()}</ul>
                 <form action="#" onSubmit={handleSubmit} >
                     <input type="text" placeholder="Name" name ="name" value ={inputs.name} onChange={handleChange}/>
                     <input type="text" readonly placeholder="Email Address" name ="email" value ={inputs.email} onChange={handleChange} />
                     <input type="password" placeholder="Password" name ="pass" onChange={handleChange}  />
                     <input type="text" placeholder="Phone" name ="phone" value ={inputs.phone} onChange={handleChange} />
                     <input type="text" placeholder="Address" name ="address" value ={inputs.address} onChange={handleChange}/>
                     <input type="file" name ="avatar" onChange={ handleUserInputFile} />
                     <button type="submit" className="btn btn-default">Signup</button>
                 </form>
             </div>{/*/sign up form*/}        
        </>
   )
}
export default UpadateUser;