import { useState } from "react";

function Form(){
    
     const [email, setEmail] = useState("");
     const [pass, setPass] = useState("");
     
     const [errorEmail, setErrorEmail] = useState("");
     const [errorPass, setErrorPass] = useState("");
    function hanldeEmail(e){
       setEmail(e.target.value);
    }
    function hanldePass(e){
        setPass(e.target.value);
     }
     function handleSubmit(e){
         e.preventDefault();
         if(email ==""){
             setErrorEmail("Vui long nhap email");
         }
         if(pass ==""){
            setErrorPass("Vui long nhap pass");
        }
     }
   return(
       <form onSubmit={handleSubmit}>
           <input type="text" value ={email} onChange={hanldeEmail}/>
           <p>{errorEmail}</p>
           <input type="text" value ={pass} onChange={hanldePass}/>
           <p>{errorPass}</p>
           <button type="submit">Submit</button>
       </form>
   )
}

export default Form;