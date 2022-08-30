import axios from "axios"
import { useEffect,useState } from "react"

function PersonList(){
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users' )
    //    axios.get('http://localhost/laravel/laravel/public/api/blog/detail/' + id )
       .then(res=>{
        //    console.log(res)
           setData(res.data)
       })
       .catch(error => console.log(error))
    },[])
    function renderData(){
    //    console.log(data)
        if(data.length > 0){
            return data.map((value,index)=>{
                // console.log(value)
                return (
                    <li key={index}>{value['phone']}</li>
                )
            }) 
        }
    }
    return (
      <ul>
         {renderData()}
      </ul>
    )
}
 export default  PersonList