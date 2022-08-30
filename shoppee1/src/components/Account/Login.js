import axios from "axios";
import {useState} from "react"
import { useNavigate } from "react-router-dom";
import Register from "./Register";
function Login(){
     const  navigate = useNavigate()
    const [inputs,setInputs] = useState("");
    const [errors,setErrors] = useState({});

     const handleChange =(e)=>{
       const inputname = e.target.name;
       const value = e.target.value;
       setInputs(state =>({...state,[inputname]:value}));
    }

    const handleSubmit =(e)=>{
         e.preventDefault();
         let errorSubmit ={};
         let flag = true;
         if(inputs.email === undefined){
           flag = false;
           errorSubmit.email='vui long nhap email'
         }else{
            flag = true;
            errorSubmit.email=''
            var re = /\S+@\S+\.\S+/;
            if(!re.test(inputs.email)){
                flag = false;
                errorSubmit.email='email khong dung dinh dang'
            }else{
              flag = true;
              errorSubmit.email=''
            }
         }
         if(inputs.pass == undefined){
          flag = false;
          errorSubmit.pass ="Vui long nhap pass"
        }else{
            flag = true;
            errorSubmit.pass =""
        }

         if(!flag){
            setErrors(errorSubmit)
         }else{
            setErrors({})
            const user ={
              email:inputs.email,
              password:inputs.pass,
              level:0
               
            }
            
            axios.post('http://localhost/laravel/laravel/public/api/login',user)
            .then(res => {
               if(res.data.errors){
                  //  console.log(res);
                  // kiem tra viec nhap email va pass co dung khong neu nhap sai thi set loi len mang hinh
                  // loi o api tra ve
                   setErrors(res.data.errors)
                }
                else{
                    // console.log(res)
                    let objVaule = {
                      data:  res.data.Auth,
                      token : res.data.success
                  }
                  localStorage.setItem('userState',JSON.stringify(objVaule))
                  // dung de kiem tra viec chuyen huong login va logout neu co bien checkValue = true 
                  // nghia la se chuyen huong den logout con khong co thi se chuyen den login
                  let checkValue = true;
                  localStorage.setItem('useList',JSON.stringify(checkValue))
                  // sau khi login oke thi chuyen sang trang home
                  navigate('/')
                }
            })
            .catch(err => {console.log(err);})
          }
    }
    const renderError =(e)=>{
         if(Object.keys(errors).length > 0){
             return(
              Object.keys(errors).map((value,index)=>{
                
                  return (
                      
                       <li key={index}>{errors[value]}</li>
                  )
              })
             )
         }
    }
    return (
       
        <section id="form">{/*form*/}
          <div className="container">
            <div className="row">
              <div className="col-sm-4 col-sm-offset-1">
                <div className="login-form">{/*login form*/}
                  <h2>Login to your account</h2>
                  {renderError()}
                  <form action="#" onSubmit={ handleSubmit}>
                    <input type="text" placeholder="Email Address" name="email" onChange={handleChange} />
                    <input type="password" placeholder="Password" name="pass" onChange={handleChange}/>
                    <button type="submit"  className="btn btn-default">Login</button>
                  </form>
                </div>{/*/login form*/}
              </div>
              <div className="col-sm-1">
                <h2 className="or">OR</h2>
              </div>
              <div className="col-sm-4">
                <Register/>
              </div>
            </div>
          </div>
        </section>
      );
}
export default Login;