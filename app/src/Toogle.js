import { useState } from "react";
// function UserGreeting(props){
//     return (
//         <h1>Wellcome</h1>
//     )
// }
// function GuestGreeting(props){
//     return (
//         <h1>Plese sign up</h1>
//     )
// }
// function Greeting(props){
//     const isToogle = props.isToogle
//     if(isToogle){
//         return <UserGreeting/>
//     }
//     return <GuestGreeting/>
// }
function Login(props) {
    return(
        <button onClick={props.onClick}>Login</button>
    )
}
function Logout(props) {
    return(
        <button onClick={props.onClick}>Logout</button>
    )
}

function Toogle(){
    const [isToogle, setIsToogle] = useState(true)
    function handleLogin(){
        setIsToogle(false)
    }
    function handleLogout(){
        
        setIsToogle(true)
    }
    function renderBtn(){
    
           let btn;
           if(isToogle){
               btn = <Login onClick ={handleLogin}/>
           }else{
              
                 btn = <Logout onClick ={handleLogout}/>
           }
           return btn;
        }
    return(
       <div>
            { renderBtn()}
           
       </div>
    )
}
export default  Toogle;