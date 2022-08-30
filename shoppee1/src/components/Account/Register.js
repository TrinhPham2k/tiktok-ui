import axios from "axios";
import { useState } from "react";

function Register(){
    const [inputs, setInputs] = useState("");
    const [errors, setErrors] = useState({});
    const [avatar, setAvatar] = useState("");
    const [fileUpload,setFileUpload] =useState("")
    const [success,setSuccess] =useState("");

    const handleChange = (e)=>{
        const nameInput = e.target.name;
        const  value= e.target.value;
        setInputs(state => ({...state,[nameInput]:value}))
    }
   const handleUserInputFile = (e) =>{
         const file = e.target.files
        //  console.log(file);
        let reader = new FileReader();
        //  console.log(reader);
        reader.onload = (e) =>{
            setAvatar(e.target.result);
            // console.log(file[0]);
            setFileUpload(file[0])
        }
        reader.readAsDataURL(file[0]);

   }
   const  handleSubmit = (e) => {
         e.preventDefault();
         let errorSubmit ={};
         let flag= true;
        if(inputs.name === undefined){
            flag = false;
            errorSubmit.name ="vui long nhap name"
        }else{
            flag = true;
            errorSubmit.name =""
        }
        if(inputs.email === undefined){
          flag = false;
          errorSubmit.email ="vui long nhap email"
        }else{
          flag = true;
          errorSubmit.email =""
          var re = /\S+@\S+\.\S+/;
          if(!re.test(inputs.email)){
              flag = false;
              errorSubmit.email = 'Email khong dung dinh dang'
          }else{
              flag = true;
              errorSubmit.email = ''
          }
       }
          if(inputs.pass === undefined){
            flag = false;
            errorSubmit.pass ="vui long nhap pass"
        }else{
            flag = true;
            errorSubmit.pass =""
        }
        
        if(inputs.phone === undefined){
          flag = false;
          errorSubmit.phone ="vui long nhap phone"
        }else{
          flag = true;
          errorSubmit.phone =""
        }
        if(inputs.address === undefined){
          flag = false;
          errorSubmit.address ="vui long nhap address"
        }else{
          flag = true;
          errorSubmit.address =""
        }
        if(fileUpload ==""){
            flag = false;
            errorSubmit.avatar ="vui long nhap avatar"
        }else{
            flag = true;
            errorSubmit.avatar =""
            if(fileUpload['size'] > 1024*1024){
                flag = false;
                errorSubmit.avatar ='loi size qua lon'
            }else{
                flag = true;
                errorSubmit.avatar =''
                let avatarArr = ['png','jpg','jpeg','PNG','JPG']
                let cutFile = fileUpload['name'].split('.');
                if(!(avatarArr.includes(cutFile[1]))){
                    flag = false;
                    errorSubmit.avatar ="loi khong ton tai duoi file"
                }
            }
        }
       

      if(!flag){
           setErrors(errorSubmit)
      }else{
          setErrors({})
          const user ={
             name: inputs.name,
             email:inputs.email,
            password:inputs.pass,
            phone: inputs.phone,
            address:inputs.address,
            avatar:avatar,
            level:0

          }
          axios.post('http://localhost/laravel/laravel/public/api/register',user)
          .then(response => {
              // console.log(response);
              if(response.data.errors){
                // loi o api tra ve
                setErrors(response.data.errors)  
                setSuccess('')
              }else{
                 setSuccess('dang ki thanh cong')
              }
          })
          .catch(err => {console.log(err);})

      }
     
   }
   const renderError =()=>{
         if(Object.keys(errors).length > 0){
             return(
              Object.keys(errors).map((value,index)=>{
                
                  return(
                    <li key={index}>{errors[value]}</li>
                  )
                  
              })
             )
         }
   }
    return(
         <>
              
             <div className="signup-form" >{/*sign up form*/}
                
                  <h2>New User Signup!</h2>
                  {renderError()}
                  <p>{success}</p>
                  <form action="#" onSubmit={ handleSubmit} >
                      <input type="text" placeholder="Name" name ="name" onChange={handleChange} />
                      <input type="text" placeholder="Email Address" name ="email" onChange={handleChange}/>
                      <input type="password" placeholder="Password" name ="pass" onChange={handleChange} />
                      <input type="text" placeholder="Phone" name ="phone" onChange={handleChange} />
                      <input type="text" placeholder="Address" name ="address" onChange={handleChange}/>
                      <input type="file" name ="avatar" onChange={handleUserInputFile} />
                      <button type="submit" className="btn btn-default">Signup</button>
                  </form>
              </div>{/*/sign up form*/}        
         </>
    )
}
export default Register;