import axios from "axios"
import { useEffect, useState } from "react";

function Add(){
    const [category, setCategory] = useState("");
    const [branddata,setBrand] = useState("");

    useEffect(()=>{
        axios.get("http://localhost/laravel/laravel/public/api/category-brand")
        .then(res =>{
            setCategory(res.data.category);
            setBrand(res.data.brand);
        } )
        .catch(err =>{console.log(err);})
    },[])
   
    const handleSelectCategory =()=>{
         if(category.length > 0){
             return category.map((value, key)=>{
                  return   <option  key={key} value={value.id}>{value.category}</option>
                     
             })
         } 
    }

    const handleSelectBrand =()=>{
        if(branddata.length > 0){
            return(
                branddata.map((value,key)=>{
                //    console.log(value.category);
                  return(
                        <option  key={key} value={value.id}>{value.brand}</option>
                  )
                
                })
            )
  
        }
    }

    const handleChange =()=>{
        
    }

    const handleUserInputFile =()=>{

    }
    const handleSubmit =(e)=>{
        e.preventDefault();
    }
    const renderError =()=>{
        
    }
    return(
        <>
             
        <div className="signup-form" >{/*sign up form*/}
             <h2>Create Product</h2>
             <ul>{ renderError()}</ul>
             <form action="#" onSubmit={handleSubmit} >
                 <input type="text" placeholder="Name" name ="name"  onChange={handleChange}/>
                 <input type="text" readonly placeholder="Price" name ="price"  onChange={handleChange} />
                 <select  >
                     {handleSelectCategory()} 
                 </select>
                 <select >
                     {handleSelectBrand()}
                 </select>
                 <select >
                     <option name="status" value="">Sale</option>
                 </select>
                 <input type="text" placeholder="Company profily" name ="company"  onChange={handleChange} />
                 <input type="file" name ="avatar" onChange={ handleUserInputFile} />
                 <textarea placeholder="Detail" name="detail" rows="5" cols="30" ></textarea>
                 
                 <button type="submit" className="btn btn-default">Add Prooduct</button>
             </form>
         </div>{/*/sign up form*/}        
      </>
    )
}
export default Add;