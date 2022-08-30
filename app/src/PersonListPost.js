import axios from "axios";
import { useState } from "react";
import FormErrors from "./FormErrors";
function PersonListPost(){
    const [inputs, setInputs] = useState("");
    const [errors, setErrors] = useState({});
    const hanldeInput =(e)=>{
        const nameInput = e.target.name;
        const value = e.target.value;
        setInputs(state => ({...state,[nameInput]:value}))
    }
    function handleSubmit(e){
        e.preventDefault();
        let errorSubmit ={};
        let flag = true;
        if(inputs.name == undefined){
            flag = false;
            errorSubmit.name = 'Vui long dien vao'
        }
        else{
            flag = true;
            errorSubmit.name = ''
        } 
        if(!flag){
            setErrors(errorSubmit)
        }else{
            setErrors({})
            const user ={
                name : inputs.name
            };
            console.log(inputs.name)
            axios.post(`https://jsonplaceholder.typicode.com/users`,user)
           .then(res =>{
               console.log(res)
               console.log(res.data)
           })
        }
     
      
    }
   return(
      <div>
          <FormErrors  errors = {errors} />
          <form onSubmit={handleSubmit}>
              <label>Person Name
                 <input  name='name' type="text" onChange={hanldeInput} />
              </label>
             <button type="submit">Add</button>
          </form>
      </div>
   )
}
export default PersonListPost;