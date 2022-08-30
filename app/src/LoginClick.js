

function LoginClick(){
    function Check(props){
        const num = props.num
        const list = num.map(num1 => 
             <li key={num.toString()}>{num1}</li>
            )
        
        return (
            <ul> {list} </ul>
    )
    }
    const num= [1,2,3,4]
   return(
       <div>
           {<Check num={num}/>}
       </div>
   )
}

export default LoginClick;