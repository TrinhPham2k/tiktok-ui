import { useState } from "react";
import axios from 'axios';
import {Link} from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
function Index(){
    const [dataBlog, setDataBlog] = useState([])

    useEffect(()=>{
        axios.get('http://localhost/laravel/laravel/public/api/blog')
             .then(res =>{
                 setDataBlog(res.data.blog.data)
             })
             .catch(err => console.error(err))
    },[])
    const renderDataBlog = () =>{
        if(dataBlog.length > 0){
          // vì ban đầu nó là 1 mảng va co nhieu gia tri nên phải map qua de duyet tung phan tu trong mang do
            return dataBlog.map((value,key)=>{
                // console.log(value)
                return (
                    <>
                     <div className="blog-post-area">
                     <h2 className="title text-center">Latest From our Blog</h2>
                     <div className="single-blog-post">
                       <h3>Girls Pink T Shirt arrived in store</h3>
                       <div className="post-meta">
                         <ul>
                           <li><i className="fa fa-user" /> Mac Doe</li>
                           <li><i className="fa fa-clock-o" /> 1:33 pm</li>
                           <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
                         </ul>
                         <span>
                           <i className="fa fa-star" />
                           <i className="fa fa-star" />
                           <i className="fa fa-star" />
                           <i className="fa fa-star" />
                           <i className="fa fa-star-half-o" />
                         </span>
                       </div>
                       <a href>
                         <img src={"http://localhost/laravel/laravel/public/upload/Blog/image/" + value['image']} alt="" />
                       </a>
                       <p>{value.description}</p>
                       <Link className="btn btn-primary" to={"/blog/detail/" + value['id']}>Read More</Link>
                     </div>
                  
                     <div className="pagination-area">
                       <ul className="pagination">
                         <li><a href className="active">1</a></li>
                         <li><a href>2</a></li>
                         <li><a href>3</a></li>
                         <li><a href><i className="fa fa-angle-double-right" /></a></li>
                       </ul>
                     </div>
                   </div>
                    </>
                ) 
            })
        }
       
    }
    return(
       <>
          {renderDataBlog()}
       </>
    )
  
}
export default Index;