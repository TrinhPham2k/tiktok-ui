import axios from "axios";
import { useState } from "react";
import FormErrors from "./FormErrors";
function PersonListDelete(){
    const [inputs, setInputs] = useState("");
    const [errors, setErrors] = useState({});
    const handleChange = (e)=>{
        const idInput = e.target.name;
      
        const value = e.target.value;
        setInputs(state =>({...state,[idInput]:value}));
    }
  
    const handleSubmit =(e)=>{
        e.preventDefault();
        axios.delete('https://jsonplaceholder.typicode.com/user/'+ inputs)
        .then(res=>{
            console.log(res.data)
        })
    }
    return(
        <div>
            <FormErrors  errors = {errors} />
            <form onSubmit={handleSubmit}>
                <label>Person Id:
                    <input type="text" name="id" onChange={handleChange}/>
                </label>
                <button type="submit">Detele</button>
            </form>
        </div>
    )
}
export default PersonListDelete;