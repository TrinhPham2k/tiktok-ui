import { useState } from "react";
import FormErrors from "./FormErrors";
function Register(){
    const [inputs, setInputs] = useState("");
    const [errors, setErrors] = useState({});
    const [fileUpload, setFileUpload] = useState("")
    function hanldeInput(e){
        const nameInput = e.target.name;
        const value = e.target.value;
        setInputs(state => ({...state, [nameInput]:value})
        
        )
     }
     function handleValidationFile(e){
         const file = e.target.files;
         setFileUpload(file[0])
     } 

      function handleSubmit(e){
          e.preventDefault();
          let errorSubmit ={};
          let flag = true;
        
          if(inputs.email == undefined){
              flag = false;
              errorSubmit.email="Vui long nhap email";
          }
          else{
            flag = true;
            errorSubmit.email="";
            const re = /\S+@\S+\.\S+/;
            if (!re.test(inputs.email)) {
                flag =false
                errorSubmit.email="Email khong dung dinh dang";
            }else{
                flag =true
                errorSubmit.email="";
            }
          }

          if(inputs.password == undefined){
             flag = false;
             errorSubmit.password="Vui long nhap password";
            
         } else{
              
               errorSubmit.password="";
               if(inputs.password.length < 3){
                flag =false
                errorSubmit.password="Mật khẩu phải lớn hơn 8 ký tự";
               }else{
                flag =true
                errorSubmit.password="";
               }
          }
       
        if(fileUpload == ""){
            flag = false;
            errorSubmit.avatar="Vui long nhap file";
           
        }
        else{
                
                if(fileUpload['size'] > 1024*1024){
                    flag = false;
                    errorSubmit.avatar ="loi size qua lon"
                }else{
                    // flag =true
                    errorSubmit.avatar="";
                   }
                let avatarArr = ['png','jpg','jpeg','PNG','JPG']
                //  console.log(fileUpload['name'])
                let cutFile = fileUpload['name'].split('.');
                //  console.log(cutFile[1])
                if(!(avatarArr.includes(cutFile[1]))){
                    flag = false;
                    errorSubmit.avatar ="loi khong ton tai duoi file"
                }
                
        }

         if(!flag){
             setErrors(errorSubmit);
         }

         else{
            setErrors({});
           
            let infoResgerter ={
                email: inputs.email,
                pass: inputs.password
            }
            // console.log(infoResgerter)
           var xx = localStorage.getItem('dangky')
           if(xx){
                infoResgerter = JSON.parse(xx)
                
           } 
           localStorage.setItem('dangky', JSON.stringify(infoResgerter))
         } 
      }
    return(
       <div>
             <FormErrors  errors = {errors} />
             <form  enctype="multipart/form-data" onSubmit={handleSubmit} >      
                    <input type="text" placeholder="Email" name ="email" onChange={hanldeInput}/>
                    <input type="text" placeholder="Pass" name ="password" onChange={hanldeInput} />
                    <input type="file" name ="avatar" onChange={handleValidationFile}/>
                   
                    <button type="submit">Logout</button>    
             </form> 
       </div>
    )
}
export default Register;