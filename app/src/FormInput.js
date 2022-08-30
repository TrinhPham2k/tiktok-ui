import { useState } from "react";
import FormErrors from "./FormErrors";
function FormInput(){
     
     const [inputs, setInputs] = useState("");
     const [errors, setErrors] = useState({});
    function hanldeInput(e){
       const nameInput = e.target.name;
       const value = e.target.value;
       setInputs(state => ({
           ...state, [nameInput]:value
        })
       
       )
    }

     function handleSubmit(e){
         e.preventDefault();
         let errorSubmit ={};
         let flag = true;
         if(inputs.email == undefined){
             flag = false;
             errorSubmit.email="Vui long nhap email";
         }else{
            flag = true;
            errorSubmit.email="";
         }
         
         if(inputs.password == undefined){
            flag = false;
            errorSubmit.password="Vui long nhap password";
        }else{
            flag = true;
            errorSubmit.password="";
         }
        if(!flag){
            setErrors(errorSubmit);
        }
     }
    
   return(
      <div>
           <FormErrors  errors = {errors} />
           <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Email" name ="email" onChange={hanldeInput}/>
                <input type="text" placeholder="Pass" name ="password" onChange={hanldeInput}/>
                <button type="submit">Login</button>
          </form>
      </div>
   )
}

export default FormInput;