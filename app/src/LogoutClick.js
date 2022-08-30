import { useState } from "react";

function LogoutClick(props){
    const  [state , setState] = useState("1")
   function handleChange(e){
        setState(e.target.value.toUpperCase())
    }
    function handleSubmit(e){
        alert("name:" + state)
        e.preventDefault()
    }
    return (
        <form onSubmit={handleSubmit}>
            {/* <label>
                name:
                <input type="text" value ={state} onChange={handleChange}/>
            </label> */}
            <select value={state} onChange={handleChange}>
                <option value="1">demo1</option>
                <option value="2">dem2</option>
                <option value="3">demo3</option>
            </select>
            <button type="submit">submit</button>
        </form>
    )
}
export default LogoutClick;