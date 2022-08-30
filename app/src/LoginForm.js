import { useState } from "react";
import FormErrors from "./FormErrors";
function LoginForm() {
    const [inputs,setInputs] = useState("");
    const [errors, setErrors] = useState({});
    function hanldeInput(e){
        const nameInput = e.target.name;
        const value = e.target.value;
        setInputs(state => ({...state, [nameInput]:value})
        
        )
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
            //   flag =false
              errorSubmit.password="";
             }
        }
        
        if(!flag){
           
            setErrors(errorSubmit);
        }else{
            setErrors({});
            // console.log(inputs)
            
            let infoResgerter={}
            var xx = localStorage.getItem('dangky')
            if(xx){
                infoResgerter = JSON.parse(xx)
                // console.log(inputs.email)
                if(inputs.email == infoResgerter['email'] && inputs.password == infoResgerter['pass'] ){
                    console.log('Success')
                }else{
                    console.log('Failed')
                }
            }
            localStorage.setItem('dangky',JSON.stringify( infoResgerter))
        }
     }

    return(
        <div>
            <FormErrors  errors = {errors} />
            <form onSubmit={handleSubmit} >      
                <input type="text" placeholder="Email" name ="email" onChange={hanldeInput} />
                <input type="text" placeholder="Pass" name ="password" onChange={hanldeInput} />
                <button type="submit">Login</button>    
            </form> 
        </div>
    )
}
export default LoginForm;